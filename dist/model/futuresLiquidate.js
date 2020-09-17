"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesLiquidate = void 0;
class FuturesLiquidate {
    static getAttributeTypeMap() {
        return FuturesLiquidate.attributeTypeMap;
    }
}
exports.FuturesLiquidate = FuturesLiquidate;
FuturesLiquidate.discriminator = undefined;
FuturesLiquidate.attributeTypeMap = [
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
        name: 'liqPrice',
        baseName: 'liq_price',
        type: 'string',
    },
    {
        name: 'markPrice',
        baseName: 'mark_price',
        type: 'string',
    },
    {
        name: 'orderId',
        baseName: 'order_id',
        type: 'number',
    },
    {
        name: 'orderPrice',
        baseName: 'order_price',
        type: 'string',
    },
    {
        name: 'fillPrice',
        baseName: 'fill_price',
        type: 'string',
    },
    {
        name: 'left',
        baseName: 'left',
        type: 'number',
    },
];
