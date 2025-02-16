export declare class ApiClient {
    private client;
    constructor(baseURL: string, apiKey: string);
    post<T>(url: string, data: any): Promise<T>;
}
