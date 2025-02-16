// src/api/client.ts

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export class ApiClient {
    private client: AxiosInstance;

    constructor(baseURL: string, apiKey: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`, // Adiciona o Bearer Token
            },
        });
    }

    public async post<T>(url: string, data: any): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.client.post(url, data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`API Error: ${error.message}`);
            }
            throw new Error('Unknown error occurred');
        }
    }
}