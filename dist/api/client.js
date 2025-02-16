"use strict";
// src/api/client.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = 'https://hight.me'; // Link fixo da API
class ApiClient {
    constructor(apiKey) {
        this.client = axios_1.default.create({
            baseURL: API_BASE_URL, // Usa o link fixo
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`, // Adiciona o Bearer Token
            },
        });
    }
    post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.post(url, data);
                // Verifica se a resposta contém um status de erro
                if (response.data && response.data.status === 'error') {
                    throw new Error(response.data.message || 'Erro desconhecido');
                }
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    // Se for um erro do Axios, lança a mensagem de erro
                    throw new Error(`API Error: ${error.message}`);
                }
                // Se for um erro lançado manualmente (status === 'error'), lança a mensagem
                throw error;
            }
        });
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=client.js.map