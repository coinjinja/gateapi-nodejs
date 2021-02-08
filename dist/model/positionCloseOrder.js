"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionCloseOrder = void 0;
class PositionCloseOrder {
    static getAttributeTypeMap() {
        return PositionCloseOrder.attributeTypeMap;
    }
}
exports.PositionCloseOrder = PositionCloseOrder;
PositionCloseOrder.discriminator = undefined;
PositionCloseOrder.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'number',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
    {
        name: 'isLiq',
        baseName: 'is_liq',
        type: 'boolean',
    },
];
