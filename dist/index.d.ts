import { PaymentService } from './api/paymentService';
import { CreatePaymentLinkRequest, CreatePaymentLinkResponse, PaymentStatusResponse } from './models/payment';
export { CreatePaymentLinkRequest, CreatePaymentLinkResponse, PaymentStatusResponse };
export { PaymentService };
export declare function createPaymentClient(apiKey: string): PaymentService;
