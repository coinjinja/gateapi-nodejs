"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticker = void 0;
class Ticker {
    static getAttributeTypeMap() {
        return Ticker.attributeTypeMap;
    }
}
exports.Ticker = Ticker;
Ticker.discriminator = undefined;
Ticker.attributeTypeMap = [
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'last',
        baseName: 'last',
        type: 'string',
    },
    {
        name: 'lowestAsk',
        baseName: 'lowest_ask',
        type: 'string',
    },
    {
        name: 'highestBid',
        baseName: 'highest_bid',
        type: 'string',
    },
    {
        name: 'changePercentage',
        baseName: 'change_percentage',
        type: 'string',
    },
    {
        name: 'baseVolume',
        baseName: 'base_volume',
        type: 'string',
    },
    {
        name: 'quoteVolume',
        baseName: 'quote_volume',
        type: 'string',
    },
    {
        name: 'high24h',
        baseName: 'high_24h',
        type: 'string',
    },
    {
        name: 'low24h',
        baseName: 'low_24h',
        type: 'string',
    },
];
