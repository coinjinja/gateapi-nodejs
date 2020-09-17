"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelOrderResult = void 0;
class CancelOrderResult {
    static getAttributeTypeMap() {
        return CancelOrderResult.attributeTypeMap;
    }
}
exports.CancelOrderResult = CancelOrderResult;
CancelOrderResult.discriminator = undefined;
CancelOrderResult.attributeTypeMap = [
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
    {
        name: 'succeeded',
        baseName: 'succeeded',
        type: 'boolean',
    },
    {
        name: 'label',
        baseName: 'label',
        type: 'string',
    },
    {
        name: 'message',
        baseName: 'message',
        type: 'string',
    },
];
