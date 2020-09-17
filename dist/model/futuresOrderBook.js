"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesOrderBook = void 0;
class FuturesOrderBook {
    static getAttributeTypeMap() {
        return FuturesOrderBook.attributeTypeMap;
    }
}
exports.FuturesOrderBook = FuturesOrderBook;
FuturesOrderBook.discriminator = undefined;
FuturesOrderBook.attributeTypeMap = [
    {
        name: 'asks',
        baseName: 'asks',
        type: 'Array<FuturesOrderBookItem>',
    },
    {
        name: 'bids',
        baseName: 'bids',
        type: 'Array<FuturesOrderBookItem>',
    },
];
