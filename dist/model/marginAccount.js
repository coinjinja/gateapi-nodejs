"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginAccount = void 0;
class MarginAccount {
    static getAttributeTypeMap() {
        return MarginAccount.attributeTypeMap;
    }
}
exports.MarginAccount = MarginAccount;
MarginAccount.discriminator = undefined;
MarginAccount.attributeTypeMap = [
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'base',
        baseName: 'base',
        type: 'MarginAccountCurrency',
    },
    {
        name: 'quote',
        baseName: 'quote',
        type: 'MarginAccountCurrency',
    },
];
