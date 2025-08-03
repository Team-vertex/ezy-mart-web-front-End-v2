/**
 * Utility functions for app download and external links
 */

// App store URLs (replace with actual URLs when available)
export const appDownloadUrls = {
    androidPlayStore: "https://play.google.com/store/apps/details?id=com.ezymart.app",
    iosAppStore: "https://apps.apple.com/app/ezymart/id123456789",
    directDownload: "/demo", // Fallback to demo page
};

/**
 * Open app store for download
 * @param platform - 'android' | 'ios' | 'demo'
 */
export const openAppDownload = (platform: 'android' | 'ios' | 'demo' = 'demo') => {
    const urls = {
        android: appDownloadUrls.androidPlayStore,
        ios: appDownloadUrls.iosAppStore,
        demo: appDownloadUrls.directDownload,
    };

    if (platform === 'demo') {
        // Navigate to demo page
        window.location.href = urls.demo;
    } else {
        // Open app store in new tab
        window.open(urls[platform], '_blank', 'noopener,noreferrer');
    }
};

/**
 * Detect user's platform and suggest appropriate download
 */
export const detectPlatformAndDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
        openAppDownload('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        openAppDownload('ios');
    } else {
        // For desktop or unknown platforms, go to demo
        openAppDownload('demo');
    }
};

/**
 * Share app via Web Share API or fallback to clipboard
 * @param title - Title for sharing
 * @param text - Description text
 * @param url - URL to share
 */
export const shareApp = async (
    title: string = "EzyMart App",
    text: string = "Check out this amazing local shopping app!",
    url: string = window.location.origin
) => {
    if (navigator.share) {
        try {
            await navigator.share({ title, text, url });
        } catch (error) {
            console.log('Error sharing:', error);
            // Fallback to clipboard
            copyToClipboard(url);
        }
    } else {
        // Fallback to clipboard
        copyToClipboard(url);
    }
};

/**
 * Copy text to clipboard
 * @param text - Text to copy
 */
export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        // You could show a toast notification here
        console.log('Copied to clipboard:', text);
    } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
};
