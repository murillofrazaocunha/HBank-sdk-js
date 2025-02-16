"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
exports.createPaymentClient = createPaymentClient;
const paymentService_1 = require("./api/paymentService");
Object.defineProperty(exports, "PaymentService", { enumerable: true, get: function () { return paymentService_1.PaymentService; } });
// Função de inicialização do cliente (opcional)
function createPaymentClient(baseURL, apiKey) {
    return new paymentService_1.PaymentService(baseURL, apiKey);
}
//# sourceMappingURL=index.js.map