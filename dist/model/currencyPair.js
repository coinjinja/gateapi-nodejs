"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyPair = void 0;
class CurrencyPair {
    static getAttributeTypeMap() {
        return CurrencyPair.attributeTypeMap;
    }
}
exports.CurrencyPair = CurrencyPair;
CurrencyPair.discriminator = undefined;
CurrencyPair.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'base',
        baseName: 'base',
        type: 'string',
    },
    {
        name: 'quote',
        baseName: 'quote',
        type: 'string',
    },
    {
        name: 'fee',
        baseName: 'fee',
        type: 'string',
    },
    {
        name: 'minBaseAmount',
        baseName: 'min_base_amount',
        type: 'string',
    },
    {
        name: 'minQuoteAmount',
        baseName: 'min_quote_amount',
        type: 'string',
    },
    {
        name: 'amountPrecision',
        baseName: 'amount_precision',
        type: 'number',
    },
    {
        name: 'precision',
        baseName: 'precision',
        type: 'number',
    },
    {
        name: 'tradeStatus',
        baseName: 'trade_status',
        type: 'CurrencyPair.TradeStatus',
    },
];
(function (CurrencyPair) {
    let TradeStatus;
    (function (TradeStatus) {
        TradeStatus[TradeStatus["Untradable"] = 'untradable'] = "Untradable";
        TradeStatus[TradeStatus["Buyable"] = 'buyable'] = "Buyable";
        TradeStatus[TradeStatus["Sellable"] = 'sellable'] = "Sellable";
        TradeStatus[TradeStatus["Tradable"] = 'tradable'] = "Tradable";
    })(TradeStatus = CurrencyPair.TradeStatus || (CurrencyPair.TradeStatus = {}));
})(CurrencyPair = exports.CurrencyPair || (exports.CurrencyPair = {}));
