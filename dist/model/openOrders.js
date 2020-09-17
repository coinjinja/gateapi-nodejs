"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenOrders = void 0;
class OpenOrders {
    static getAttributeTypeMap() {
        return OpenOrders.attributeTypeMap;
    }
}
exports.OpenOrders = OpenOrders;
OpenOrders.discriminator = undefined;
OpenOrders.attributeTypeMap = [
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
    },
    {
        name: 'orders',
        baseName: 'orders',
        type: 'Array<Order>',
    },
];
