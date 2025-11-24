// --- START OF FILE config.js ---

export const GENRES = [
    {
        id: 'cyberpunk',
        name: 'Cyber City',
        prompt: 'futuristic metropolis, neon-soaked skyscrapers, rain-slicked streets, holograms, high-tech urban scenery',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
        color: 0xcd00ff
    },
    {
        id: 'nature',
        name: 'Deep Nature',
        prompt: 'majestic mountains, dense ancient forests, flowing rivers, mist, untouched wilderness',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        color: 0x228b22
    },
    {
        id: 'space',
        name: 'Cosmos',
        prompt: 'deep space nebula, spiral galaxies, distant stars, cosmic dust, planets, celestial void',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
        color: 0x000080
    },
    {
        id: 'abstract',
        name: 'Abstract',
        prompt: 'flowing geometric shapes, complex patterns, surreal forms, liquid motion, artistic composition',
        image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
        color: 0xffa500
    },
    {
        id: 'cars',
        name: 'Supercars',
        prompt: 'sleek hypercar, asphalt track, aerodynamic design, automotive engineering',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        color: 0xdc143c
    },
    {
        id: 'zen',
        name: 'Zen Garden',
        prompt: 'Japanese zen garden, cherry blossoms, koi pond, stone pathways, bamboo, serenity',
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
        color: 0xffb7c5
    },
    {
        id: 'ocean',
        name: 'Ocean Depths',
        prompt: 'underwater coral reef, tropical fish, sea turtles, ocean floor, marine life',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        color: 0x00ced1
    },
    {
        id: 'fantasy',
        name: 'Fantasy Realm',
        prompt: 'magical kingdom, floating islands, glowing crystals, castles, mythical atmosphere',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
        color: 0x9370db
    },
    {
        id: 'pastel',
        name: 'Pastel Dream',
        prompt: 'rolling hills, fluffy clouds, soft dreamscape, candy-colored horizon, gentle scenery',
        image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=800&q=80',
        color: 0xb0e0e6
    },
    {
        id: 'cozyinterior',
        name: 'Cozy Interior',
        prompt: 'comfortable bedroom, rain on window, books, warm coffee, string lights, hygge atmosphere',
        image: 'https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8',
        color: 0xd2691e
    },
    {
        id: 'lofi',
        name: 'Lo-fi Vibes',
        prompt: 'lonely desk at night, city view window, computer screen glow, headphones, nostalgic mood',
        image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=800&q=80',
        color: 0x483d8b
    },
    {
        id: 'goldenhour',
        name: 'Golden Hour',
        prompt: 'urban skyline, busy streets, glass buildings, sun flares, warm sunset lighting',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
        color: 0xff8c00
    },
    {
        id: 'sky',
        name: 'Sky & Clouds',
        prompt: 'cloud formations, sunrise horizon, atmospheric sky, celestial vastness',
        image: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800&q=80',
        color: 0x87ceeb
    },
    {
        id: 'terrain',
        name: 'Rough Terrain',
        prompt: 'rocky canyons, desert cliffs, jagged rocks, geological formations, textured earth',
        image: 'https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?w=800&q=80',
        color: 0xa0522d
    },
    {
        id: 'stilllife',
        name: 'Still Life',
        prompt: 'arranged objects, fruits, vases, cloth drapery, artistic composition',
        image: 'https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?w=800&q=80',
        color: 0x8b4513
    },
    {
        id: 'iridescence',
        name: 'Iridescence',
        prompt: 'holographic foil texture, prismatic colors, liquid metal, rainbow reflections',
        image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80',
        color: 0x00ffff
    },
    {
        id: 'flora',
        name: 'Lush Flora',
        prompt: 'exotic flowers, lush leaves, botanical garden, blooming nature',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
        color: 0x32cd32
    }
];

export const STYLES = [
    {
        id: 'minimal',
        name: 'Minimalist',
        prompt: 'minimalist art style, clean lines, flat solid colors, vast negative space, simple vector aesthetics, decluttered',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'
    },
    {
        id: 'oil',
        name: 'Oil Paint',
        prompt: 'impasto oil painting, thick visible brushstrokes, canvas texture, rich color blending, classical fine art style',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80'
    },
    {
        id: 'neon',
        name: 'Neon Glow',
        prompt: 'neon lighting style, dark background, glowing outlines, high contrast, synthwave aesthetic, vibrant saturated colors',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80'
    },
    {
        id: 'sketch',
        name: 'Tech Sketch',
        prompt: 'technical blueprint style, fine white lines on dark background, schematic drawing, rough pencil sketch texture',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80'
    },
    {
        id: 'clay',
        name: '3D Clay',
        prompt: '3D plasticine clay render, soft rounded edges, matte finish, fingerprint textures, stop-motion animation look',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80'
    },
    {
        id: 'noir',
        name: 'Film Noir',
        prompt: 'classic film noir photography, high contrast black and white, deep shadows, dramatic silhouettes, film grain',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
    },
    {
        id: 'watercolor',
        name: 'Watercolor',
        prompt: 'watercolor painting, soft bleeding edges, translucent color washes, paper texture, wet ink style',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80'
    },
    {
        id: 'pixel',
        name: 'Pixel Art',
        prompt: 'retro 16-bit pixel art, game aesthetic, crisp low-resolution sprites, limited color palette, dithering',
        image: 'https://images.unsplash.com/photo-1671750764695-10c7f164844c'
    },
    {
        id: 'anime',
        name: 'Anime Aesthetic',
        prompt: 'high-quality anime art, Makoto Shinkai style, vibrant colors, dramatic lighting, detailed linework, cel shading',
        image: 'https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14'
    },
    {
        id: 'photoreal',
        name: 'Photorealistic',
        prompt: 'hyper-realistic photography, 8k resolution, highly detailed, perfect lighting, uncompressed raw quality',
        image: 'https://images.unsplash.com/photo-1690626826406-c2fc0d344551'
    },
    {
        id: 'voxel',
        name: 'Voxel Art',
        prompt: 'voxel art style, cubic 3D blocks, isometric view, bright playful colors, digital minecraft aesthetic',
        image: 'https://images.unsplash.com/photo-1743306947426-06d3d970e58f'
    },
    {
        id: 'cinematic',
        name: 'Cinematic',
        prompt: 'cinematic movie shot, wide aspect ratio, bold color grading, deep bokeh, dramatic lighting, atmospheric',
        image: 'https://images.unsplash.com/photo-1610847455028-9e55e62bac33'
    },
    {
        id: 'glitch',
        name: 'Glitch Effect',
        prompt: 'digital glitch art, RGB color splitting, datamoshing, corrupted video signal, pixel sorting distortion',
        image: 'https://images.unsplash.com/photo-1634368998864-8984df61cdda'
    },
    {
        id: 'lowpoly',
        name: 'Low Poly',
        prompt: 'low-poly 3D render, faceted geometric shapes, soft pastel lighting, minimalist polygon art, sharp edges',
        image: 'https://images.unsplash.com/photo-1643143596361-a39511490214'
    },
    {
        id: 'bwphoto',
        name: 'B&W Photo',
        prompt: 'vintage black and white photography, silver gelatin print, heavy film grain, high contrast monochrome',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80'
    },
    {
        id: 'classicpaint',
        name: 'Classic Painting',
        prompt: 'Renaissance style painting, visible brushwork, dramatic composition, acrylic texture, museum quality',
        image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80'
    },
    {
        id: 'graphic',
        name: 'Graphic Design',
        prompt: 'bold graphic design, vector art, flat distinct shapes, strong typography elements, pop art influence',
        image: 'https://images.unsplash.com/photo-1586974087421-2ba56dab378c'
    },
    {
        id: 'ink',
        name: 'Ink Wash',
        prompt: 'traditional Sumi-e ink wash, monochromatic flowing black ink, minimalist brush strokes, rice paper texture',
        image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80'
    },
    {
        id: 'modernist',
        name: 'Modernist',
        prompt: 'Bauhaus modernist art, geometric abstraction, primary colors, clean lines, structural composition',
        image: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?w=800&q=80'
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
    '{genre}, {style}, {color} tones. wallpaper, 8k, highly detailed',
    'aesthetic wallpaper of {genre}, {style} style',
    '{style} masterpiece of {genre}, {color} lighting',
    '{genre} visualized as {style}, aesthetic background',
    'high quality {genre}, artstyle: {style}'
];

export const API_CONFIG = {
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
