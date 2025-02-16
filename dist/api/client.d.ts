export declare class ApiClient {
    private client;
    constructor(apiKey: string);
    post<T>(url: string, data: any): Promise<T>;
}
