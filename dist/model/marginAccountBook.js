export class MarginAccountBook {
    static getAttributeTypeMap() {
        return MarginAccountBook.attributeTypeMap;
    }
}
MarginAccountBook.discriminator = undefined;
MarginAccountBook.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'time',
        baseName: 'time',
        type: 'string',
    },
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'change',
        baseName: 'change',
        type: 'string',
    },
    {
        name: 'balance',
        baseName: 'balance',
        type: 'string',
    },
];
