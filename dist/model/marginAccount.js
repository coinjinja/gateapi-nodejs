export class MarginAccount {
    static getAttributeTypeMap() {
        return MarginAccount.attributeTypeMap;
    }
}
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
