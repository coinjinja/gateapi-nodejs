"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesOrderBookItem = void 0;
class FuturesOrderBookItem {
    static getAttributeTypeMap() {
        return FuturesOrderBookItem.attributeTypeMap;
    }
}
exports.FuturesOrderBookItem = FuturesOrderBookItem;
FuturesOrderBookItem.discriminator = undefined;
FuturesOrderBookItem.attributeTypeMap = [
    {
        name: 'p',
        baseName: 'p',
        type: 'string',
    },
    {
        name: 's',
        baseName: 's',
        type: 'number',
    },
];
