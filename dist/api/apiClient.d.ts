import { Authentication } from '../model/models';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
export declare class ApiClient {
    protected axiosInstance: AxiosInstance;
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected authentications: {
        [key: string]: Authentication;
    };
    constructor(basePath?: string, axiosInstance?: AxiosInstance);
    set basePath(basePath: string);
    get basePath(): string;
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    setApiKeySecret(key: string, secret: string): void;
    applyToRequest(config: AxiosRequestConfig, authSettings: Array<string>): AxiosRequestConfig;
    request<T>(config: AxiosRequestConfig, responseType: string, authSettings: Array<string>): Promise<{
        response: AxiosResponse;
        body: T;
    }>;
}
