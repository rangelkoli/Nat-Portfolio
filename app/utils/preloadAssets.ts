/**
 * Utility to preload images and videos for project pages
 * This improves perceived performance by loading assets before users navigate to projects
 */

// All project image URLs (relative to public folder)
const projectImages = [
    // HereAfter
    '/projects/HereAfterHero.png',
    '/projects/Drop1.png',
    '/projects/Drop2.png',
    '/projects/Design.png',
    '/projects/HereAfter4.jpg',
    '/projects/HereAfter7.png',
    '/Divider.svg',

    // Caravan
    '/projects/Caravan1.jpg',
    '/projects/Caravan3.png',
    '/projects/Caravan4.png',

    // Parker
    '/projects/Parker1.png',
    '/projects/Parker2.jpg',
    '/projects/Parker3.png',
    '/projects/Parker4.jpg',
    '/projects/Parker5.jpg',
    '/projects/Parker6.jpg',
    '/projects/Parker7.png',

    // Vault
    '/projects/Vault1.png',
    '/projects/VaultBoard.png',
    '/projects/VaultBoard1.png',

    // Maybern
    '/projects/Dashboard.png',
    '/projects/ReportBuilder.png',
    '/projects/IRRBridge.png',
];

// All project video URLs (relative to public folder)
const projectVideos = [
    // HereAfter
    '/projects/HereAfter2.mov',
    '/projects/HereAfter3.mov',
    '/projects/HereAfter8.mov',
    '/projects/HereAfter9.mov',

    // Caravan
    '/projects/Caravan2.mov',
    '/projects/Caravan5.mov',
];

/**
 * Preloads an image by creating an Image object
 * Uses link preload for better browser optimization
 */
function preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        // Use link preload for better performance
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.onload = () => resolve();
        link.onerror = () => {
            console.warn(`Failed to preload image: ${src}`);
            resolve(); // Don't reject, just warn
        };
        document.head.appendChild(link);

        // Also load via Image for immediate caching
        const img = new Image();
        img.src = src;
    });
}

/**
 * Preloads a video by creating a link preload and optionally fetching metadata
 */
function preloadVideo(src: string): Promise<void> {
    return new Promise((resolve) => {
        // Use link preload for video
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = src;
        link.onload = () => resolve();
        link.onerror = () => {
            console.warn(`Failed to preload video: ${src}`);
            resolve(); // Don't reject, just warn
        };
        document.head.appendChild(link);

        // Also create a video element to start buffering
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = src;
        video.load();

        // Resolve after a short delay to not block other operations
        setTimeout(resolve, 100);
    });
}

/**
 * Preloads all project assets (images and videos)
 * Uses requestIdleCallback for better performance
 */
export async function preloadAllProjectAssets(): Promise<void> {
    // Use requestIdleCallback if available for non-blocking preload
    const schedulePreload = (callback: () => void) => {
        if ('requestIdleCallback' in window) {
            (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void })
                .requestIdleCallback(callback, { timeout: 5000 });
        } else {
            setTimeout(callback, 100);
        }
    };

    schedulePreload(async () => {
        // Preload images first (they're usually smaller and more critical)
        const imagePromises = projectImages.map(preloadImage);

        // Preload videos (these are larger, so we do them in parallel but expect them to take longer)
        const videoPromises = projectVideos.map(preloadVideo);

        try {
            await Promise.all([...imagePromises, ...videoPromises]);
            console.log('All project assets preloaded successfully');
        } catch (error) {
            console.warn('Some assets failed to preload:', error);
        }
    });
}

/**
 * Preloads assets for a specific project
 * Can be called when hovering over a project button for even faster loading
 */
export function preloadProjectAssets(projectName: string): void {
    const projectAssets: Record<string, { images: string[]; videos: string[] }> = {
        HereAfter: {
            images: [
                '/projects/HereAfterHero.png',
                '/projects/Drop1.png',
                '/projects/Drop2.png',
                '/projects/Design.png',
                '/projects/HereAfter4.jpg',
                '/projects/HereAfter7.png',
            ],
            videos: [
                '/projects/HereAfter2.mov',
                '/projects/HereAfter3.mov',
                '/projects/HereAfter8.mov',
                '/projects/HereAfter9.mov',
            ],
        },
        Maybern: {
            images: [
                '/projects/Dashboard.png',
                '/projects/ReportBuilder.png',
                '/projects/Design.png',
                '/projects/IRRBridge.png',
            ],
            videos: [],
        },
        Parker: {
            images: [
                '/projects/Parker1.png',
                '/projects/Parker2.jpg',
                '/projects/Parker3.png',
                '/projects/Parker4.jpg',
                '/projects/Parker5.jpg',
                '/projects/Parker6.jpg',
                '/projects/Parker7.png',
            ],
            videos: [],
        },
        Caravan: {
            images: [
                '/projects/Caravan1.jpg',
                '/projects/Caravan3.png',
                '/projects/Caravan4.png',
            ],
            videos: [
                '/projects/Caravan2.mov',
                '/projects/Caravan5.mov',
            ],
        },
        Vault: {
            images: [
                '/projects/Vault1.png',
                '/projects/VaultBoard.png',
                '/projects/VaultBoard1.png',
                '/projects/Drop1.png',
                '/projects/Drop2.png',
                '/projects/Design.png',
            ],
            videos: [],
        },
    };

    const assets = projectAssets[projectName];
    if (!assets) return;

    assets.images.forEach(preloadImage);
    assets.videos.forEach(preloadVideo);
}
