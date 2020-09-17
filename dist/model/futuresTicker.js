"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesTicker = void 0;
class FuturesTicker {
    static getAttributeTypeMap() {
        return FuturesTicker.attributeTypeMap;
    }
}
exports.FuturesTicker = FuturesTicker;
FuturesTicker.discriminator = undefined;
FuturesTicker.attributeTypeMap = [
    {
        name: 'contract',
        baseName: 'contract',
        type: 'string',
    },
    {
        name: 'last',
        baseName: 'last',
        type: 'string',
    },
    {
        name: 'changePercentage',
        baseName: 'change_percentage',
        type: 'string',
    },
    {
        name: 'totalSize',
        baseName: 'total_size',
        type: 'string',
    },
    {
        name: 'low24h',
        baseName: 'low_24h',
        type: 'string',
    },
    {
        name: 'high24h',
        baseName: 'high_24h',
        type: 'string',
    },
    {
        name: 'volume24h',
        baseName: 'volume_24h',
        type: 'string',
    },
    {
        name: 'volume24hBtc',
        baseName: 'volume_24h_btc',
        type: 'string',
    },
    {
        name: 'volume24hUsd',
        baseName: 'volume_24h_usd',
        type: 'string',
    },
    {
        name: 'volume24hBase',
        baseName: 'volume_24h_base',
        type: 'string',
    },
    {
        name: 'volume24hQuote',
        baseName: 'volume_24h_quote',
        type: 'string',
    },
    {
        name: 'volume24hSettle',
        baseName: 'volume_24h_settle',
        type: 'string',
    },
    {
        name: 'markPrice',
        baseName: 'mark_price',
        type: 'string',
    },
    {
        name: 'fundingRate',
        baseName: 'funding_rate',
        type: 'string',
    },
    {
        name: 'fundingRateIndicative',
        baseName: 'funding_rate_indicative',
        type: 'string',
    },
    {
        name: 'indexPrice',
        baseName: 'index_price',
        type: 'string',
    },
    {
        name: 'quantoBaseRate',
        baseName: 'quanto_base_rate',
        type: 'string',
    },
];
