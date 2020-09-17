"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBook = void 0;
class OrderBook {
    static getAttributeTypeMap() {
        return OrderBook.attributeTypeMap;
    }
}
exports.OrderBook = OrderBook;
OrderBook.discriminator = undefined;
OrderBook.attributeTypeMap = [
    {
        name: 'asks',
        baseName: 'asks',
        type: 'Array<Array<string>>',
    },
    {
        name: 'bids',
        baseName: 'bids',
        type: 'Array<Array<string>>',
    },
];
