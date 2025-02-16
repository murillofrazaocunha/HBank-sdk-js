// src/api/paymentService.ts

import { ApiClient } from './client';
import {
    CreatePaymentLinkRequest,
    CreatePaymentLinkResponse,
    PaymentStatusResponse,
} from '../models/payment';

export class PaymentService {
    private apiClient: ApiClient;

    constructor(apiKey: string) {
        this.apiClient = new ApiClient(apiKey); // Passa apenas a chave de API
    }

    public async createPaymentLink(
        data: CreatePaymentLinkRequest
    ): Promise<CreatePaymentLinkResponse> {
        return this.apiClient.post<CreatePaymentLinkResponse>('/api/createPaymentLink', data);
    }

    public async getPaymentStatus(id: string): Promise<PaymentStatusResponse> {
        return this.apiClient.post<PaymentStatusResponse>('/api/getPayment', { id });
    }
}