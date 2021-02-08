"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GateApiV4Auth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./batchOrder"), exports);
__exportStar(require("./cancelOrder"), exports);
__exportStar(require("./cancelOrderResult"), exports);
__exportStar(require("./contract"), exports);
__exportStar(require("./contractStat"), exports);
__exportStar(require("./currency"), exports);
__exportStar(require("./currencyPair"), exports);
__exportStar(require("./deliveryContract"), exports);
__exportStar(require("./deliverySettlement"), exports);
__exportStar(require("./depositAddress"), exports);
__exportStar(require("./fundingAccount"), exports);
__exportStar(require("./fundingBookItem"), exports);
__exportStar(require("./fundingRateRecord"), exports);
__exportStar(require("./futuresAccount"), exports);
__exportStar(require("./futuresAccountBook"), exports);
__exportStar(require("./futuresCandlestick"), exports);
__exportStar(require("./futuresInitialOrder"), exports);
__exportStar(require("./futuresLiquidate"), exports);
__exportStar(require("./futuresOrder"), exports);
__exportStar(require("./futuresOrderBook"), exports);
__exportStar(require("./futuresOrderBookItem"), exports);
__exportStar(require("./futuresPriceTrigger"), exports);
__exportStar(require("./futuresPriceTriggeredOrder"), exports);
__exportStar(require("./futuresTicker"), exports);
__exportStar(require("./futuresTrade"), exports);
__exportStar(require("./insuranceRecord"), exports);
__exportStar(require("./ledgerRecord"), exports);
__exportStar(require("./loan"), exports);
__exportStar(require("./loanPatch"), exports);
__exportStar(require("./loanRecord"), exports);
__exportStar(require("./marginAccount"), exports);
__exportStar(require("./marginAccountBook"), exports);
__exportStar(require("./marginAccountCurrency"), exports);
__exportStar(require("./marginCurrencyPair"), exports);
__exportStar(require("./myFuturesTrade"), exports);
__exportStar(require("./openOrders"), exports);
__exportStar(require("./order"), exports);
__exportStar(require("./orderBook"), exports);
__exportStar(require("./position"), exports);
__exportStar(require("./positionClose"), exports);
__exportStar(require("./positionCloseOrder"), exports);
__exportStar(require("./repayRequest"), exports);
__exportStar(require("./repayment"), exports);
__exportStar(require("./spotAccount"), exports);
__exportStar(require("./subAccountBalance"), exports);
__exportStar(require("./subAccountTransfer"), exports);
__exportStar(require("./ticker"), exports);
__exportStar(require("./trade"), exports);
__exportStar(require("./tradeFee"), exports);
__exportStar(require("./transfer"), exports);
__exportStar(require("./triggerOrderResponse"), exports);
__exportStar(require("./withdrawStatus"), exports);
const querystring = require("querystring");
const crypto = require("crypto");
const batchOrder_1 = require("./batchOrder");
const cancelOrder_1 = require("./cancelOrder");
const cancelOrderResult_1 = require("./cancelOrderResult");
const contract_1 = require("./contract");
const contractStat_1 = require("./contractStat");
const currency_1 = require("./currency");
const currencyPair_1 = require("./currencyPair");
const deliveryContract_1 = require("./deliveryContract");
const deliverySettlement_1 = require("./deliverySettlement");
const depositAddress_1 = require("./depositAddress");
const fundingAccount_1 = require("./fundingAccount");
const fundingBookItem_1 = require("./fundingBookItem");
const fundingRateRecord_1 = require("./fundingRateRecord");
const futuresAccount_1 = require("./futuresAccount");
const futuresAccountBook_1 = require("./futuresAccountBook");
const futuresCandlestick_1 = require("./futuresCandlestick");
const futuresInitialOrder_1 = require("./futuresInitialOrder");
const futuresLiquidate_1 = require("./futuresLiquidate");
const futuresOrder_1 = require("./futuresOrder");
const futuresOrderBook_1 = require("./futuresOrderBook");
const futuresOrderBookItem_1 = require("./futuresOrderBookItem");
const futuresPriceTrigger_1 = require("./futuresPriceTrigger");
const futuresPriceTriggeredOrder_1 = require("./futuresPriceTriggeredOrder");
const futuresTicker_1 = require("./futuresTicker");
const futuresTrade_1 = require("./futuresTrade");
const insuranceRecord_1 = require("./insuranceRecord");
const ledgerRecord_1 = require("./ledgerRecord");
const loan_1 = require("./loan");
const loanPatch_1 = require("./loanPatch");
const loanRecord_1 = require("./loanRecord");
const marginAccount_1 = require("./marginAccount");
const marginAccountBook_1 = require("./marginAccountBook");
const marginAccountCurrency_1 = require("./marginAccountCurrency");
const marginCurrencyPair_1 = require("./marginCurrencyPair");
const myFuturesTrade_1 = require("./myFuturesTrade");
const openOrders_1 = require("./openOrders");
const order_1 = require("./order");
const orderBook_1 = require("./orderBook");
const position_1 = require("./position");
const positionClose_1 = require("./positionClose");
const positionCloseOrder_1 = require("./positionCloseOrder");
const repayRequest_1 = require("./repayRequest");
const repayment_1 = require("./repayment");
const spotAccount_1 = require("./spotAccount");
const subAccountBalance_1 = require("./subAccountBalance");
const subAccountTransfer_1 = require("./subAccountTransfer");
const ticker_1 = require("./ticker");
const trade_1 = require("./trade");
const tradeFee_1 = require("./tradeFee");
const transfer_1 = require("./transfer");
const triggerOrderResponse_1 = require("./triggerOrderResponse");
const withdrawStatus_1 = require("./withdrawStatus");
const primitives = ['string', 'boolean', 'double', 'integer', 'long', 'float', 'number', 'any'];
const enumsMap = {
    'BatchOrder.Status': batchOrder_1.BatchOrder.Status,
    'BatchOrder.Type': batchOrder_1.BatchOrder.Type,
    'BatchOrder.Account': batchOrder_1.BatchOrder.Account,
    'BatchOrder.Side': batchOrder_1.BatchOrder.Side,
    'BatchOrder.TimeInForce': batchOrder_1.BatchOrder.TimeInForce,
    'Contract.Type': contract_1.Contract.Type,
    'Contract.MarkType': contract_1.Contract.MarkType,
    'CurrencyPair.TradeStatus': currencyPair_1.CurrencyPair.TradeStatus,
    'DeliveryContract.Cycle': deliveryContract_1.DeliveryContract.Cycle,
    'DeliveryContract.Type': deliveryContract_1.DeliveryContract.Type,
    'DeliveryContract.MarkType': deliveryContract_1.DeliveryContract.MarkType,
    'FuturesAccountBook.Type': futuresAccountBook_1.FuturesAccountBook.Type,
    'FuturesInitialOrder.Tif': futuresInitialOrder_1.FuturesInitialOrder.Tif,
    'FuturesOrder.FinishAs': futuresOrder_1.FuturesOrder.FinishAs,
    'FuturesOrder.Status': futuresOrder_1.FuturesOrder.Status,
    'FuturesOrder.Tif': futuresOrder_1.FuturesOrder.Tif,
    'FuturesPriceTrigger.StrategyType': futuresPriceTrigger_1.FuturesPriceTrigger.StrategyType,
    'FuturesPriceTrigger.PriceType': futuresPriceTrigger_1.FuturesPriceTrigger.PriceType,
    'FuturesPriceTrigger.Rule': futuresPriceTrigger_1.FuturesPriceTrigger.Rule,
    'FuturesPriceTriggeredOrder.Status': futuresPriceTriggeredOrder_1.FuturesPriceTriggeredOrder.Status,
    'FuturesPriceTriggeredOrder.FinishAs': futuresPriceTriggeredOrder_1.FuturesPriceTriggeredOrder.FinishAs,
    'LedgerRecord.Status': ledgerRecord_1.LedgerRecord.Status,
    'Loan.Status': loan_1.Loan.Status,
    'Loan.Side': loan_1.Loan.Side,
    'LoanPatch.Side': loanPatch_1.LoanPatch.Side,
    'LoanRecord.Status': loanRecord_1.LoanRecord.Status,
    'MyFuturesTrade.Role': myFuturesTrade_1.MyFuturesTrade.Role,
    'Order.Status': order_1.Order.Status,
    'Order.Type': order_1.Order.Type,
    'Order.Account': order_1.Order.Account,
    'Order.Side': order_1.Order.Side,
    'Order.TimeInForce': order_1.Order.TimeInForce,
    'Position.Mode': position_1.Position.Mode,
    'PositionClose.Side': positionClose_1.PositionClose.Side,
    'RepayRequest.Mode': repayRequest_1.RepayRequest.Mode,
    'SubAccountTransfer.Direction': subAccountTransfer_1.SubAccountTransfer.Direction,
    'Trade.Side': trade_1.Trade.Side,
    'Trade.Role': trade_1.Trade.Role,
    'Transfer.From': transfer_1.Transfer.From,
    'Transfer.To': transfer_1.Transfer.To,
};
const typeMap = {
    BatchOrder: batchOrder_1.BatchOrder,
    CancelOrder: cancelOrder_1.CancelOrder,
    CancelOrderResult: cancelOrderResult_1.CancelOrderResult,
    Contract: contract_1.Contract,
    ContractStat: contractStat_1.ContractStat,
    Currency: currency_1.Currency,
    CurrencyPair: currencyPair_1.CurrencyPair,
    DeliveryContract: deliveryContract_1.DeliveryContract,
    DeliverySettlement: deliverySettlement_1.DeliverySettlement,
    DepositAddress: depositAddress_1.DepositAddress,
    FundingAccount: fundingAccount_1.FundingAccount,
    FundingBookItem: fundingBookItem_1.FundingBookItem,
    FundingRateRecord: fundingRateRecord_1.FundingRateRecord,
    FuturesAccount: futuresAccount_1.FuturesAccount,
    FuturesAccountBook: futuresAccountBook_1.FuturesAccountBook,
    FuturesCandlestick: futuresCandlestick_1.FuturesCandlestick,
    FuturesInitialOrder: futuresInitialOrder_1.FuturesInitialOrder,
    FuturesLiquidate: futuresLiquidate_1.FuturesLiquidate,
    FuturesOrder: futuresOrder_1.FuturesOrder,
    FuturesOrderBook: futuresOrderBook_1.FuturesOrderBook,
    FuturesOrderBookItem: futuresOrderBookItem_1.FuturesOrderBookItem,
    FuturesPriceTrigger: futuresPriceTrigger_1.FuturesPriceTrigger,
    FuturesPriceTriggeredOrder: futuresPriceTriggeredOrder_1.FuturesPriceTriggeredOrder,
    FuturesTicker: futuresTicker_1.FuturesTicker,
    FuturesTrade: futuresTrade_1.FuturesTrade,
    InsuranceRecord: insuranceRecord_1.InsuranceRecord,
    LedgerRecord: ledgerRecord_1.LedgerRecord,
    Loan: loan_1.Loan,
    LoanPatch: loanPatch_1.LoanPatch,
    LoanRecord: loanRecord_1.LoanRecord,
    MarginAccount: marginAccount_1.MarginAccount,
    MarginAccountBook: marginAccountBook_1.MarginAccountBook,
    MarginAccountCurrency: marginAccountCurrency_1.MarginAccountCurrency,
    MarginCurrencyPair: marginCurrencyPair_1.MarginCurrencyPair,
    MyFuturesTrade: myFuturesTrade_1.MyFuturesTrade,
    OpenOrders: openOrders_1.OpenOrders,
    Order: order_1.Order,
    OrderBook: orderBook_1.OrderBook,
    Position: position_1.Position,
    PositionClose: positionClose_1.PositionClose,
    PositionCloseOrder: positionCloseOrder_1.PositionCloseOrder,
    RepayRequest: repayRequest_1.RepayRequest,
    Repayment: repayment_1.Repayment,
    SpotAccount: spotAccount_1.SpotAccount,
    SubAccountBalance: subAccountBalance_1.SubAccountBalance,
    SubAccountTransfer: subAccountTransfer_1.SubAccountTransfer,
    Ticker: ticker_1.Ticker,
    Trade: trade_1.Trade,
    TradeFee: tradeFee_1.TradeFee,
    Transfer: transfer_1.Transfer,
    TriggerOrderResponse: triggerOrderResponse_1.TriggerOrderResponse,
    WithdrawStatus: withdrawStatus_1.WithdrawStatus,
};
class ObjectSerializer {
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
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
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
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
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
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
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
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
exports.OAuth = OAuth;
class GateApiV4Auth {
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
exports.GateApiV4Auth = GateApiV4Auth;
