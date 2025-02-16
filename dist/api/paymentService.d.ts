import { CreatePaymentLinkRequest, CreatePaymentLinkResponse, PaymentStatusResponse } from '../models/payment';
export declare class PaymentService {
    private apiClient;
    constructor(baseURL: string, apiKey: string);
    createPaymentLink(data: CreatePaymentLinkRequest): Promise<CreatePaymentLinkResponse>;
    getPaymentStatus(id: string): Promise<PaymentStatusResponse>;
}
