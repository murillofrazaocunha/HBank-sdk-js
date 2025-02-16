
# Documentação do Cliente de Pagamento

Este é um cliente em **CommonJS** para interagir com a API de pagamento da Hight Bank. Ele permite criar links de pagamento e verificar o status de pagamentos.

---

## Instalação

Para instalar o pacote, use o seguinte comando:

```bash
npm install https://github.com/murillofrazaocunha/HBank-sdk-js
```

---

## Uso Básico
```javascript
// Importa a função createPaymentClient do pacote
const { createPaymentClient } = require('meu-cliente-pagamento');

// Cria o cliente de pagamento
const apiKey = 'sua-chave-de-api'; // Substitua pela sua chave de API
const paymentService = createPaymentClient(apiKey);

// Função principal (assíncrona)
async function main() {
  try {
    // Dados para criar o link de pagamento
    const paymentData = {
      amount: '100.00', // Valor do pagamento
      description: 'Teste', // Descrição do pagamento
      notification_url: 'https://hightpanel.com.br', // URL de notificação
      redirect: 'https://hightpanel.com.br', // URL de redirecionamento
      cupons: {
        TESTE: '20%', // Cupom de desconto
      },
    };

    // Cria o link de pagamento
    const paymentLink = await paymentService.createPaymentLink(paymentData);
    console.log('Link de pagamento criado:', paymentLink);

    // Verifica o status do pagamento
    const paymentStatus = await paymentService.getPaymentStatus(paymentLink.id);
    console.log('Status do pagamento:', paymentStatus);
  } catch (error) {
    // Captura e exibe erros
    console.error('Erro:', error.message);
  }
}

// Executa a função principal
main();
```

---

## Explicação das Funções

### 1. **`createPaymentClient(apiKey)`**
Cria uma instância do cliente de pagamento.

- **Parâmetros**:
    - `apiKey` (string): Chave de API para autenticação.
- **Retorno**:
    - Retorna uma instância do `PaymentService`.

---

### 2. **`paymentService.createPaymentLink(paymentData)`**
Cria um link de pagamento.

- **Parâmetros**:
    - `paymentData` (objeto): Dados do pagamento.
        - `amount` (string): Valor do pagamento (ex: `"100.00"`).
        - `description` (string): Descrição do pagamento.
        - `notification_url` (string): URL para receber notificações.
        - `redirect` (string): URL para redirecionamento após o pagamento.
        - `cupons` (objeto): Cupons de desconto (opcional).
- **Retorno**:
    - Retorna um objeto com:
        - `status` (string): Status da operação (`"success"` ou `"error"`).
        - `link` (string): Link de pagamento gerado.
        - `id` (string): ID do pagamento.

---

### 3. **`paymentService.getPaymentStatus(id)`**
Verifica o status de um pagamento.

- **Parâmetros**:
    - `id` (string): ID do pagamento.
- **Retorno**:
    - Retorna um objeto com:
        - `status` (string): Status da operação (`"success"` ou `"error"`).
        - `id` (string): ID do pagamento.
        - `amount` (string): Valor do pagamento.
        - `description` (string): Descrição do pagamento.
        - `pstatus` (string): Status do pagamento.
        - `cupons` (objeto): Cupons aplicados.

---

## Tratamento de Erros

Para capturar erros, use um bloco `try/catch`:

```javascript
try {
  const paymentLink = await paymentService.createPaymentLink(paymentData);
  console.log('Link de pagamento criado:', paymentLink);
} catch (error) {
  console.error('Erro:', error.message);
}
```

---

## Exemplo Completo

Aqui está um exemplo completo de uso:

```javascript
const { createPaymentClient } = require('hbank-sdk');

const apiKey = 'sua-chave-de-api'; // Substitua pela sua chave de API
const paymentService = createPaymentClient(apiKey);

async function main() {
  try {
    // Dados para criar o link de pagamento
    const paymentData = {
      amount: '100.00',
      description: 'Teste',
      notification_url: 'https://hightpanel.com.br',
      redirect: 'https://hightpanel.com.br',
      cupons: {
        TESTE: '20%',
      },
    };

    // Cria o link de pagamento
    const paymentLink = await paymentService.createPaymentLink(paymentData);
    console.log('Link de pagamento criado:', paymentLink);

    // Verifica o status do pagamento
    const paymentStatus = await paymentService.getPaymentStatus(paymentLink.id);
    console.log('Status do pagamento:', paymentStatus);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

// Executa a função principal
main();
```

## Contribuição

Se encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).