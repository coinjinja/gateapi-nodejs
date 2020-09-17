"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverySettlement = void 0;
class DeliverySettlement {
    static getAttributeTypeMap() {
        return DeliverySettlement.attributeTypeMap;
    }
}
exports.DeliverySettlement = DeliverySettlement;
DeliverySettlement.discriminator = undefined;
DeliverySettlement.attributeTypeMap = [
    {
        name: 'time',
        baseName: 'time',
        type: 'number',
    },
    {
        name: 'contract',
        baseName: 'contract',
        type: 'string',
    },
    {
        name: 'leverage',
        baseName: 'leverage',
        type: 'string',
    },
    {
        name: 'size',
        baseName: 'size',
        type: 'number',
    },
    {
        name: 'margin',
        baseName: 'margin',
        type: 'string',
    },
    {
        name: 'entryPrice',
        baseName: 'entry_price',
        type: 'string',
    },
    {
        name: 'settlePrice',
        baseName: 'settle_price',
        type: 'string',
    },
    {
        name: 'profit',
        baseName: 'profit',
        type: 'string',
    },
    {
        name: 'fee',
        baseName: 'fee',
        type: 'string',
    },
];
