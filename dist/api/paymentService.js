"use strict";
// src/api/paymentService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const client_1 = require("./client");
class PaymentService {
    constructor(baseURL, apiKey) {
        this.apiClient = new client_1.ApiClient(baseURL, apiKey);
    }
    createPaymentLink(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.apiClient.post('/api/createPaymentLink', data);
        });
    }
    getPaymentStatus(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Usa POST mesmo para consultar o status
            return this.apiClient.post('/api/getPayment', { id });
        });
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=paymentService.js.map