// src/api/paymentService.ts

import { ApiClient } from './client';
import {
    CreatePaymentLinkRequest,
    CreatePaymentLinkResponse,
    PaymentStatusResponse,
} from '../models/payment';

export class PaymentService {
    private apiClient: ApiClient;

    constructor(baseURL: string, apiKey: string) {
        this.apiClient = new ApiClient(baseURL, apiKey);
    }

    public async createPaymentLink(
        data: CreatePaymentLinkRequest
    ): Promise<CreatePaymentLinkResponse> {
        return this.apiClient.post<CreatePaymentLinkResponse>('/api/createPaymentLink', data);
    }

    public async getPaymentStatus(id: string): Promise<PaymentStatusResponse> {
        // Usa POST mesmo para consultar o status
        return this.apiClient.post<PaymentStatusResponse>('/api/getPayment', { id });
    }
}