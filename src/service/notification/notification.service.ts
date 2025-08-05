import { notifications } from '@mantine/notifications';

export interface NotificationOptions {
    title?: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    autoClose?: boolean | number;
}

class NotificationService {
    /**
     * Show success notification
     */
    showSuccess(message: string, title?: string, autoClose: number | boolean = 5000) {
        notifications.show({
            title: title || 'Success',
            message,
            color: 'green',
            autoClose,
            withCloseButton: true,
            icon: '✅',
        });
    }

    /**
     * Show error notification
     */
    showError(message: string, title?: string, autoClose: number | boolean = 7000) {
        notifications.show({
            title: title || 'Error',
            message,
            color: 'red',
            autoClose,
            withCloseButton: true,
            icon: '❌',
        });
    }

    /**
     * Show info notification
     */
    showInfo(message: string, title?: string, autoClose: number | boolean = 4000) {
        notifications.show({
            title: title || 'Information',
            message,
            color: 'blue',
            autoClose,
            withCloseButton: true,
            icon: 'ℹ️',
        });
    }

    /**
     * Show warning notification
     */
    showWarning(message: string, title?: string, autoClose: number | boolean = 5000) {
        notifications.show({
            title: title || 'Warning',
            message,
            color: 'yellow',
            autoClose,
            withCloseButton: true,
            icon: '⚠️',
        });
    }

    /**
     * Show generic notification
     */
    show(options: NotificationOptions) {
        const iconMap = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️',
        };

        const colorMap = {
            success: 'green',
            error: 'red',
            info: 'blue',
            warning: 'yellow',
        };

        notifications.show({
            title: options.title,
            message: options.message,
            color: colorMap[options.type],
            autoClose: options.autoClose !== undefined ? options.autoClose : 5000,
            withCloseButton: true,
            icon: iconMap[options.type],
        });
    }

    /**
     * Clear all notifications
     */
    clearAll() {
        notifications.clean();
    }
}

export default new NotificationService();
