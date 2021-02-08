export class MarginAccountCurrency {
    static getAttributeTypeMap() {
        return MarginAccountCurrency.attributeTypeMap;
    }
}
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
