export class CancelOrder {
    static getAttributeTypeMap() {
        return CancelOrder.attributeTypeMap;
    }
}
CancelOrder.discriminator = undefined;
CancelOrder.attributeTypeMap = [
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
];
