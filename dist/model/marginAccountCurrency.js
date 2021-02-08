"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginAccountCurrency = void 0;
class MarginAccountCurrency {
    static getAttributeTypeMap() {
        return MarginAccountCurrency.attributeTypeMap;
    }
}
exports.MarginAccountCurrency = MarginAccountCurrency;
MarginAccountCurrency.discriminator = undefined;
MarginAccountCurrency.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'available',
        baseName: 'available',
        type: 'string',
    },
    {
        name: 'locked',
        baseName: 'locked',
        type: 'string',
    },
    {
        name: 'borrowed',
        baseName: 'borrowed',
        type: 'string',
    },
];
