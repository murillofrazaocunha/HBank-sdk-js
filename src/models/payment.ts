// src/models/payment.ts

export interface CreatePaymentLinkRequest {
    amount: string;
    description: string;
    notification_url: string;
    redirect: string;
    cupons: {
        [key: string]: string;
    };
}

export interface CreatePaymentLinkResponse {
    status: string;
    link: string;
    id: string;
}

export interface PaymentStatusResponse {
    status: string;
    id: string;
    amount: string;
    description: string;
    pstatus: string;
    cupons: {
        [key: string]: string;
    };
}