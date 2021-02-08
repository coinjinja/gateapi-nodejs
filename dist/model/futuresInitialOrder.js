"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesInitialOrder = void 0;
class FuturesInitialOrder {
    static getAttributeTypeMap() {
        return FuturesInitialOrder.attributeTypeMap;
    }
}
exports.FuturesInitialOrder = FuturesInitialOrder;
FuturesInitialOrder.discriminator = undefined;
FuturesInitialOrder.attributeTypeMap = [
    {
        name: 'contract',
        baseName: 'contract',
        type: 'string',
    },
    {
        name: 'size',
        baseName: 'size',
        type: 'number',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
    {
        name: 'close',
        baseName: 'close',
        type: 'boolean',
    },
    {
        name: 'tif',
        baseName: 'tif',
        type: 'FuturesInitialOrder.Tif',
    },
    {
        name: 'text',
        baseName: 'text',
        type: 'string',
    },
    {
        name: 'reduceOnly',
        baseName: 'reduce_only',
        type: 'boolean',
    },
    {
        name: 'isReduceOnly',
        baseName: 'is_reduce_only',
        type: 'boolean',
    },
    {
        name: 'isClose',
        baseName: 'is_close',
        type: 'boolean',
    },
];
(function (FuturesInitialOrder) {
    let Tif;
    (function (Tif) {
        Tif[Tif["Gtc"] = 'gtc'] = "Gtc";
        Tif[Tif["Ioc"] = 'ioc'] = "Ioc";
    })(Tif = FuturesInitialOrder.Tif || (FuturesInitialOrder.Tif = {}));
})(FuturesInitialOrder = exports.FuturesInitialOrder || (exports.FuturesInitialOrder = {}));
