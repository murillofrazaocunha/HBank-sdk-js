// src/api/client.ts

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const API_BASE_URL = 'https://hight.me'; // Link fixo da API

export class ApiClient {
    private client: AxiosInstance;

    constructor(apiKey: string) {
        this.client = axios.create({
            baseURL: API_BASE_URL, // Usa o link fixo
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`, // Adiciona o Bearer Token
            },
        });
    }

    public async post<T>(url: string, data: any): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.client.post(url, data);

            // Verifica se a resposta contém um status de erro
            if (response.data && (response.data as any).status === 'error') {
                throw new Error((response.data as any).message || 'Erro desconhecido');
            }

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Se for um erro do Axios, lança a mensagem de erro
                throw new Error(`API Error: ${error.message}`);
            }
            // Se for um erro lançado manualmente (status === 'error'), lança a mensagem
            throw error;
        }
    }
}