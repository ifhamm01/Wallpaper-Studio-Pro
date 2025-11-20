// Configuration for Wallpaper Studio Pro

export const GENRES = [
    {
        id: 'cyberpunk',
        name: 'Cyber City',
        prompt: 'cyberpunk futuristic city, neon rain, high tech',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80'
    },
    {
        id: 'nature',
        name: 'Deep Nature',
        prompt: 'majestic mountain landscape, lush forest, golden hour',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
        id: 'space',
        name: 'Cosmos',
        prompt: 'deep space nebula, colorful stars, cosmic dust, cinematic',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80'
    },
    {
        id: 'abstract',
        name: 'Abstract',
        prompt: '3d abstract shapes, fluid forms, glass texture, minimal',
        image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80'
    },
    {
        id: 'cars',
        name: 'Supercars',
        prompt: 'sleek sports car, motion blur, asphalt, dramatic lighting',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
    },
    {
        id: 'zen',
        name: 'Zen Garden',
        prompt: 'japanese zen garden, cherry blossoms, peaceful water, soft light',
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80'
    },
    {
        id: 'ocean',
        name: 'Ocean Depths',
        prompt: 'underwater coral reef, tropical fish, crystal clear water, sunbeams',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    },
    {
        id: 'fantasy',
        name: 'Fantasy Realm',
        prompt: 'magical fantasy landscape, floating islands, mystical aurora',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80'
    }
];

export const STYLES = [
    {
        id: 'minimal',
        name: 'Minimalist',
        prompt: 'minimalist style, clean lines, flat colors, plenty of negative space',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'
    },
    {
        id: 'oil',
        name: 'Oil Paint',
        prompt: 'oil painting style, textured brushstrokes, impasto, classic art',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80'
    },
    {
        id: 'neon',
        name: 'Neon Glow',
        prompt: 'neon glow style, vibrant saturated colors, dark background, synthwave',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80'
    },
    {
        id: 'sketch',
        name: 'Tech Sketch',
        prompt: 'technical schematic style, blueprint, white lines on dark, detailed',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80'
    },
    {
        id: 'clay',
        name: '3D Clay',
        prompt: '3d clay render style, soft lighting, smooth textures, blender cycles',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80'
    },
    {
        id: 'noir',
        name: 'Film Noir',
        prompt: 'film noir style, black and white, high contrast, dramatic shadows',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
    },
    {
        id: 'watercolor',
        name: 'Watercolor',
        prompt: 'watercolor painting style, soft edges, flowing colors, artistic',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80'
    },
    {
        id: 'pixel',
        name: 'Pixel Art',
        prompt: 'pixel art style, retro gaming aesthetic, 16-bit graphics',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80'
    }
];

export const COLOR_BIASES = [
    { id: null, name: 'None', color: 'bg-gray-600', border: 'border-white/30' },
    { id: 'red', name: 'Red', color: 'bg-red-600', border: '' },
    { id: 'blue', name: 'Blue', color: 'bg-blue-600', border: '' },
    { id: 'gold', name: 'Gold', color: 'bg-yellow-500', border: '' },
    { id: 'black and white', name: 'B&W', color: 'bg-black', border: 'border-white' },
    { id: 'purple', name: 'Purple', color: 'bg-purple-600', border: '' },
    { id: 'green', name: 'Green', color: 'bg-green-600', border: '' },
    { id: 'orange', name: 'Orange', color: 'bg-orange-600', border: '' }
];

export const PROMPT_TEMPLATES = [
    'A serene {genre} scene in {style} style with {color} tones',
    'Epic {genre} landscape rendered in {style} aesthetic',
    'Minimalist {genre} composition with {style} treatment',
    'Dramatic {genre} vista in stunning {style} style',
    'Atmospheric {genre} environment with {style} rendering'
];

export const API_CONFIG = {
    // In production/Netlify, this points to the function. 
    // Locally with 'netlify dev', it also points to the function.
    BASE_URL: '',
    GENERATION_ENDPOINT: '/.netlify/functions/generate',
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000
};

export const APP_CONFIG = {
    MAX_HISTORY_ITEMS: 20,
    DEFAULT_WIDTH: 1080,
    DEFAULT_HEIGHT: 1920,
    DESKTOP_WIDTH: 1920,
    DESKTOP_HEIGHT: 1080,
    WEBGL_PARTICLE_COUNT: 600,
    WEBGL_PARTICLE_COUNT_MOBILE: 300
};
