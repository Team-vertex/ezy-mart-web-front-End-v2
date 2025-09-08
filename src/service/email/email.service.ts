import emailjs from '@emailjs/browser';

export interface ContactFormData {
    Name: string;
    
    contactNumber: string;
    email?: string;
    reason: string;
    message: string;
}

export interface EmailResponse {
    success: boolean;
    message: string;
    messageId?: string;
}

export interface POSRequestFormData {
    Name: string;
    
    mobile: string;
    email?: string;
    
    city: string;
 
    message: string;
}

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

class EmailService {
    constructor() {
        // Initialize EmailJS with public key
        if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'your_public_key') {
            emailjs.init(EMAILJS_CONFIG.publicKey);
        }
    }

    /**
     * Send POS request email using EmailJS
     */
    async sendPOSRequestEmail(formData: POSRequestFormData): Promise<EmailResponse> {
        try {
            // Check if EmailJS is configured
            if (EMAILJS_CONFIG.publicKey === 'your_public_key') {
                throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in the .env file.');
            }

            // Prepare template parameters for EmailJS
            const templateParams = {
                from_name: `${formData.Name} `.trim(),
                // from_email: formData.contactEmail,
                from_phone: formData.mobile,
                                location: `${formData.city}, `,
                subject: `POS System Request `,
                message: formData.message,
                to_email: 'contact.vertexcooperation@gmail.com', // Your receiving email
                // reply_to: formData.contactEmail,
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            if (response.status === 200) {
                return {
                    success: true,
                    message: 'POS request sent successfully!',
                    messageId: response.text,
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to send POS request. Please try again.',
                };
            }
        } catch (error: any) {
            console.error('EmailJS error:', error);

            if (error.text?.includes('The service ID is invalid')) {
                throw new Error('EmailJS service configuration is invalid. Please check your service ID.');
            } else if (error.text?.includes('The template ID is invalid')) {
                throw new Error('EmailJS template configuration is invalid. Please check your template ID.');
            } else if (error.text?.includes('The user ID is invalid')) {
                throw new Error('EmailJS public key is invalid. Please check your public key.');
            } else {
                throw new Error(error.message || 'Failed to send POS request. Please try again later.');
            }
        }
    }

    /**
     * Send contact form email using EmailJS
     */
    async sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
        try {
            // Check if EmailJS is configured
            if (EMAILJS_CONFIG.publicKey === 'your_public_key') {
                throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in the .env file.');
            }

            // Prepare template parameters for EmailJS
            const templateParams = {
                // from_name: `${formData.Name} ${formData.lastName || ''}`.trim(),
                from_email: formData.email || 'No email provided',
                from_phone: formData.contactNumber,
                subject: `Contact Form: ${formData.reason}`,
                message: formData.message,
                reason: formData.reason,
                to_email: 'contact.vertexcooperation@gmail.com', // Your receiving email
                // reply_to: formData.email || '',
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            if (response.status === 200) {
                return {
                    success: true,
                    message: 'Email sent successfully!',
                    messageId: response.text,
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to send email. Please try again.',
                };
            }
        } catch (error: any) {
            console.error('EmailJS error:', error);

            if (error.text?.includes('The service ID is invalid')) {
                throw new Error('EmailJS service configuration is invalid. Please check your service ID.');
            } else if (error.text?.includes('The template ID is invalid')) {
                throw new Error('EmailJS template configuration is invalid. Please check your template ID.');
            } else if (error.text?.includes('The user ID is invalid')) {
                throw new Error('EmailJS public key is invalid. Please check your public key.');
            } else {
                throw new Error(error.message || 'Failed to send email. Please try again later.');
            }
        }
    }

    /**
     * Check if EmailJS is properly configured
     */
    async checkHealth(): Promise<boolean> {
        try {
            return (
                EMAILJS_CONFIG.serviceId !== 'your_service_id' &&
                EMAILJS_CONFIG.templateId !== 'your_template_id' &&
                EMAILJS_CONFIG.publicKey !== 'your_public_key'
            );
        } catch (error) {
            console.error('EmailJS health check failed:', error);
            return false;
        }
    }

    /**
     * Validate email format
     */
    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validate phone number format
     */
    validatePhoneNumber(phone: string): boolean {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    }
}

export default new EmailService();