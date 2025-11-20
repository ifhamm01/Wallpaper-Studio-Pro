export default async (request, context) => {
    // Only allow POST requests
    if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const apiKey = Netlify.env.get("PIXAZO_API_KEY");

        if (!apiKey) {
            return new Response(JSON.stringify({ error: "API key not configured" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        const body = await request.json();

        const response = await fetch("https://gateway.pixazo.ai/flux-1-schnell/v1/getData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": apiKey,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ error: `Upstream API error: ${response.status}` }), {
                status: response.status,
                headers: { "Content-Type": "application/json" }
            });
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
