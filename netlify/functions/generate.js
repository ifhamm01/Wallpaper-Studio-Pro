export default async (request, context) => {
    // Only allow POST requests
    if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        // 1. Retrieve all available API keys from environment variables
        const apiKeys = getApiKeys();

        if (apiKeys.length === 0) {
            return new Response(JSON.stringify({ error: "No API keys configured" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        const body = await request.json();
        let lastError = null;
        let lastStatus = 500;

        // 2. Loop through keys until one works
        for (const apiKey of apiKeys) {
            try {
                const response = await fetch("https://gateway.pixazo.ai/flux-1-schnell/v1/getData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Ocp-Apim-Subscription-Key": apiKey,
                        "Cache-Control": "no-cache"
                    },
                    body: JSON.stringify(body)
                });

                // If successful, return data immediately
                if (response.ok) {
                    const data = await response.json();
                    return new Response(JSON.stringify(data), {
                        status: 200,
                        headers: { "Content-Type": "application/json" }
                    });
                }

                // If response is not OK, capture error and continue to next key
                lastStatus = response.status;
                const errorText = await response.text();
                lastError = `API error: ${response.status} - ${errorText}`;
                console.warn(`Key ending in ...${apiKey.slice(-4)} failed with status ${response.status}. Trying next key...`);

                // Optimization: If the error is Client side (e.g. 400 Bad Request), 
                // switching keys won't fix it, so we can abort early.
                // Remove this block if you want to retry on absolutely everything.
                if (response.status === 400) {
                    break;
                }

            } catch (error) {
                // Network errors or JSON parsing errors
                lastError = error.message;
                console.warn(`Network error with key ending in ...${apiKey.slice(-4)}. Trying next key...`);
            }
        }

        // 3. If loop finishes without success, return the last error encountered
        return new Response(JSON.stringify({ error: "All API keys failed", details: lastError }), {
            status: lastStatus,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};

/**
 * Helper function to collect API keys from Netlify Environment Variables
 * Looks for PIXAZO_API_KEY, PIXAZO_API_KEY_2, PIXAZO_API_KEY_3, etc.
 */
function getApiKeys() {
    const keys = [];
    
    // Get primary key
    const primary = Netlify.env.get("PIXAZO_API_KEY");
    if (primary) keys.push(primary);

    // Get numbered backup keys (checking up to 10 backups)
    for (let i = 2; i <= 10; i++) {
        const key = Netlify.env.get(`PIXAZO_API_KEY_${i}`);
        if (key) {
            keys.push(key);
        } else {
            // Stop checking if a number is missing to save resources
            break;
        }
    }
    
    return keys;
}
