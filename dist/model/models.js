export * from './batchOrder';
export * from './cancelOrder';
export * from './cancelOrderResult';
export * from './contract';
export * from './contractStat';
export * from './currency';
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
export * from './subAccountBalance';
export * from './subAccountTransfer';
export * from './ticker';
export * from './trade';
export * from './tradeFee';
export * from './transfer';
export * from './triggerOrderResponse';
export * from './withdrawStatus';
import * as querystring from 'querystring';
import * as crypto from 'crypto';
import { URL } from 'url';
import { BatchOrder } from './batchOrder';
import { CancelOrder } from './cancelOrder';
import { CancelOrderResult } from './cancelOrderResult';
import { Contract } from './contract';
import { ContractStat } from './contractStat';
import { Currency } from './currency';
import { CurrencyPair } from './currencyPair';
import { DeliveryContract } from './deliveryContract';
import { DeliverySettlement } from './deliverySettlement';
import { DepositAddress } from './depositAddress';
import { FundingAccount } from './fundingAccount';
import { FundingBookItem } from './fundingBookItem';
import { FundingRateRecord } from './fundingRateRecord';
import { FuturesAccount } from './futuresAccount';
import { FuturesAccountBook } from './futuresAccountBook';
import { FuturesCandlestick } from './futuresCandlestick';
import { FuturesInitialOrder } from './futuresInitialOrder';
import { FuturesLiquidate } from './futuresLiquidate';
import { FuturesOrder } from './futuresOrder';
import { FuturesOrderBook } from './futuresOrderBook';
import { FuturesOrderBookItem } from './futuresOrderBookItem';
import { FuturesPriceTrigger } from './futuresPriceTrigger';
import { FuturesPriceTriggeredOrder } from './futuresPriceTriggeredOrder';
import { FuturesTicker } from './futuresTicker';
import { FuturesTrade } from './futuresTrade';
import { InsuranceRecord } from './insuranceRecord';
import { LedgerRecord } from './ledgerRecord';
import { Loan } from './loan';
import { LoanPatch } from './loanPatch';
import { LoanRecord } from './loanRecord';
import { MarginAccount } from './marginAccount';
import { MarginAccountBook } from './marginAccountBook';
import { MarginAccountCurrency } from './marginAccountCurrency';
import { MarginCurrencyPair } from './marginCurrencyPair';
import { MyFuturesTrade } from './myFuturesTrade';
import { OpenOrders } from './openOrders';
import { Order } from './order';
import { OrderBook } from './orderBook';
import { Position } from './position';
import { PositionClose } from './positionClose';
import { PositionCloseOrder } from './positionCloseOrder';
import { RepayRequest } from './repayRequest';
import { Repayment } from './repayment';
import { SpotAccount } from './spotAccount';
import { SubAccountBalance } from './subAccountBalance';
import { SubAccountTransfer } from './subAccountTransfer';
import { Ticker } from './ticker';
import { Trade } from './trade';
import { TradeFee } from './tradeFee';
import { Transfer } from './transfer';
import { TriggerOrderResponse } from './triggerOrderResponse';
import { WithdrawStatus } from './withdrawStatus';
const primitives = ['string', 'boolean', 'double', 'integer', 'long', 'float', 'number', 'any'];
const enumsMap = {
    'BatchOrder.Status': BatchOrder.Status,
    'BatchOrder.Type': BatchOrder.Type,
    'BatchOrder.Account': BatchOrder.Account,
    'BatchOrder.Side': BatchOrder.Side,
    'BatchOrder.TimeInForce': BatchOrder.TimeInForce,
    'Contract.Type': Contract.Type,
    'Contract.MarkType': Contract.MarkType,
    'CurrencyPair.TradeStatus': CurrencyPair.TradeStatus,
    'DeliveryContract.Cycle': DeliveryContract.Cycle,
    'DeliveryContract.Type': DeliveryContract.Type,
    'DeliveryContract.MarkType': DeliveryContract.MarkType,
    'FuturesAccountBook.Type': FuturesAccountBook.Type,
    'FuturesInitialOrder.Tif': FuturesInitialOrder.Tif,
    'FuturesOrder.FinishAs': FuturesOrder.FinishAs,
    'FuturesOrder.Status': FuturesOrder.Status,
    'FuturesOrder.Tif': FuturesOrder.Tif,
    'FuturesPriceTrigger.StrategyType': FuturesPriceTrigger.StrategyType,
    'FuturesPriceTrigger.PriceType': FuturesPriceTrigger.PriceType,
    'FuturesPriceTrigger.Rule': FuturesPriceTrigger.Rule,
    'FuturesPriceTriggeredOrder.Status': FuturesPriceTriggeredOrder.Status,
    'FuturesPriceTriggeredOrder.FinishAs': FuturesPriceTriggeredOrder.FinishAs,
    'LedgerRecord.Status': LedgerRecord.Status,
    'Loan.Status': Loan.Status,
    'Loan.Side': Loan.Side,
    'LoanPatch.Side': LoanPatch.Side,
    'LoanRecord.Status': LoanRecord.Status,
    'MyFuturesTrade.Role': MyFuturesTrade.Role,
    'Order.Status': Order.Status,
    'Order.Type': Order.Type,
    'Order.Account': Order.Account,
    'Order.Side': Order.Side,
    'Order.TimeInForce': Order.TimeInForce,
    'Position.Mode': Position.Mode,
    'PositionClose.Side': PositionClose.Side,
    'RepayRequest.Mode': RepayRequest.Mode,
    'SubAccountTransfer.Direction': SubAccountTransfer.Direction,
    'Trade.Side': Trade.Side,
    'Trade.Role': Trade.Role,
    'Transfer.From': Transfer.From,
    'Transfer.To': Transfer.To,
};
const typeMap = {
    BatchOrder: BatchOrder,
    CancelOrder: CancelOrder,
    CancelOrderResult: CancelOrderResult,
    Contract: Contract,
    ContractStat: ContractStat,
    Currency: Currency,
    CurrencyPair: CurrencyPair,
    DeliveryContract: DeliveryContract,
    DeliverySettlement: DeliverySettlement,
    DepositAddress: DepositAddress,
    FundingAccount: FundingAccount,
    FundingBookItem: FundingBookItem,
    FundingRateRecord: FundingRateRecord,
    FuturesAccount: FuturesAccount,
    FuturesAccountBook: FuturesAccountBook,
    FuturesCandlestick: FuturesCandlestick,
    FuturesInitialOrder: FuturesInitialOrder,
    FuturesLiquidate: FuturesLiquidate,
    FuturesOrder: FuturesOrder,
    FuturesOrderBook: FuturesOrderBook,
    FuturesOrderBookItem: FuturesOrderBookItem,
    FuturesPriceTrigger: FuturesPriceTrigger,
    FuturesPriceTriggeredOrder: FuturesPriceTriggeredOrder,
    FuturesTicker: FuturesTicker,
    FuturesTrade: FuturesTrade,
    InsuranceRecord: InsuranceRecord,
    LedgerRecord: LedgerRecord,
    Loan: Loan,
    LoanPatch: LoanPatch,
    LoanRecord: LoanRecord,
    MarginAccount: MarginAccount,
    MarginAccountBook: MarginAccountBook,
    MarginAccountCurrency: MarginAccountCurrency,
    MarginCurrencyPair: MarginCurrencyPair,
    MyFuturesTrade: MyFuturesTrade,
    OpenOrders: OpenOrders,
    Order: Order,
    OrderBook: OrderBook,
    Position: Position,
    PositionClose: PositionClose,
    PositionCloseOrder: PositionCloseOrder,
    RepayRequest: RepayRequest,
    Repayment: Repayment,
    SpotAccount: SpotAccount,
    SubAccountBalance: SubAccountBalance,
    SubAccountTransfer: SubAccountTransfer,
    Ticker: Ticker,
    Trade: Trade,
    TradeFee: TradeFee,
    Transfer: Transfer,
    TriggerOrderResponse: TriggerOrderResponse,
    WithdrawStatus: WithdrawStatus,
};
export class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === 'Date') {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            const discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    const discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            let subType = type.replace('Array<', '');
            subType = subType.substring(0, subType.length - 1);
            const transformedData = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            const instance = {};
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            let subType = type.replace('Array<', '');
            subType = subType.substring(0, subType.length - 1);
            const transformedData = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            const instance = new typeMap[type]();
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
export class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(config) {
        config.auth = {
            username: this.username,
            password: this.password,
        };
        return config;
    }
}
export class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(config) {
        if (config && config.headers) {
            const accessToken = typeof this.accessToken === 'function' ? this.accessToken() : this.accessToken;
            config.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        return config;
    }
}
export class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(config) {
        if (this.location == 'query') {
            config.params[this.paramName] = this.apiKey;
        }
        else if (this.location == 'header' && config && config.headers) {
            config.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && config && config.headers) {
            if (config.headers['Cookie']) {
                config.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                config.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
        return config;
    }
}
export class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(config) {
        if (config && config.headers) {
            config.headers['Authorization'] = 'Bearer ' + this.accessToken;
        }
        return config;
    }
}
export class GateApiV4Auth {
    constructor() {
        this.key = '';
        this.secret = '';
    }
    applyToRequest(config) {
        config.paramsSerializer = function (params) {
            return querystring.stringify(params);
        };
        const timestamp = (new Date().getTime() / 1000).toString();
        const resourcePath = new URL(config.url).pathname;
        const queryString = unescape(querystring.stringify(config.params));
        let bodyParam = '';
        if (config.data) {
            if (typeof config.data == 'string') {
                bodyParam = config.data;
            }
            else {
                bodyParam = JSON.stringify(config.data);
            }
        }
        const hashedPayload = crypto.createHash('sha512').update(bodyParam).digest('hex');
        const signatureString = [config.method, resourcePath, queryString, hashedPayload, timestamp].join('\n');
        const signature = crypto.createHmac('sha512', this.secret).update(signatureString).digest('hex');
        Object.assign(config.headers, { KEY: this.key, Timestamp: timestamp, SIGN: signature });
        return config;
    }
}
