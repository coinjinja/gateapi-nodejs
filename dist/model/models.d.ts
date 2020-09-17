export * from './batchOrder';
export * from './cancelOrder';
export * from './cancelOrderResult';
export * from './contract';
export * from './currencyPair';
export * from './deliveryContract';
export * from './deliverySettlement';
export * from './depositAddress';
export * from './fundingAccount';
export * from './fundingBookItem';
export * from './fundingRateRecord';
export * from './futuresAccount';
export * from './futuresAccountBook';
export * from './futuresCandlestick';
export * from './futuresInitialOrder';
export * from './futuresLiquidate';
export * from './futuresOrder';
export * from './futuresOrderBook';
export * from './futuresOrderBookItem';
export * from './futuresPriceTrigger';
export * from './futuresPriceTriggeredOrder';
export * from './futuresTicker';
export * from './futuresTrade';
export * from './insuranceRecord';
export * from './ledgerRecord';
export * from './loan';
export * from './loanPatch';
export * from './loanRecord';
export * from './marginAccount';
export * from './marginAccountBook';
export * from './marginAccountCurrency';
export * from './marginCurrencyPair';
export * from './myFuturesTrade';
export * from './openOrders';
export * from './order';
export * from './orderBook';
export * from './position';
export * from './positionClose';
export * from './positionCloseOrder';
export * from './repayRequest';
export * from './repayment';
export * from './spotAccount';
export * from './subAccountTransfer';
export * from './ticker';
export * from './trade';
export * from './tradeFee';
export * from './transfer';
export * from './triggerOrderResponse';
export * from './withdrawStatus';
import { AxiosRequestConfig } from 'axios';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig;
}
export declare class GateApiV4Auth implements Authentication {
    key: string;
    secret: string;
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig;
}
