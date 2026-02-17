/**
 * Utility to preload images for project pages
 * Videos are loaded on demand to save bandwidth
 */

const projectImages: Record<string, string[]> = {
    HereAfter: [
        '/projects/HereAfterHero.png',
        '/projects/Drop1.png',
        '/projects/Drop2.png',
        '/projects/Design.png',
        '/projects/HereAfter4.jpg',
        '/projects/HereAfter7.png',
    ],
    Maybern: [
        '/projects/Dashboard.png',
        '/projects/ReportBuilder.png',
        '/projects/Design.png',
        '/projects/IRRBridge.png',
    ],
    Parker: [
        '/projects/Parker1.png',
        '/projects/Parker2.jpg',
        '/projects/Parker3.png',
        '/projects/Parker4.jpg',
        '/projects/Parker5.jpg',
        '/projects/Parker6.jpg',
        '/projects/Parker7.png',
    ],
    Caravan: [
        '/projects/Caravan1.jpg',
        '/projects/Caravan3.png',
        '/projects/Caravan4.png',
    ],
    Vault: [
        '/projects/Vault1.png',
        '/projects/VaultBoard.png',
        '/projects/VaultBoard1.png',
        '/projects/Drop1.png',
        '/projects/Drop2.png',
        '/projects/Design.png',
    ],
};

function preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve();
    });
}

export function preloadProjectAssets(projectName: string): void {
    const images = projectImages[projectName];
    if (!images) return;
    
    if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void })
            .requestIdleCallback(() => {
                images.forEach(preloadImage);
            });
    } else {
        setTimeout(() => {
            images.forEach(preloadImage);
        }, 100);
    }
}
