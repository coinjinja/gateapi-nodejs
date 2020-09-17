"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelOrder = void 0;
class CancelOrder {
    static getAttributeTypeMap() {
        return CancelOrder.attributeTypeMap;
    }
}
exports.CancelOrder = CancelOrder;
CancelOrder.discriminator = undefined;
CancelOrder.attributeTypeMap = [
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
];
