import { PaymentService } from './api/paymentService';
import {
    CreatePaymentLinkRequest,
    CreatePaymentLinkResponse,
    PaymentStatusResponse,
} from './models/payment';

// Exporta os tipos para facilitar a importação
export { CreatePaymentLinkRequest, CreatePaymentLinkResponse, PaymentStatusResponse };

// Exporta a classe PaymentService para ser usada diretamente
export { PaymentService };

// Função de inicialização do cliente (opcional)
export function createPaymentClient(apiKey: string): PaymentService {
    return new PaymentService(apiKey);
}