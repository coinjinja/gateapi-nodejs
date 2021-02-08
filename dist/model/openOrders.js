export class OpenOrders {
    static getAttributeTypeMap() {
        return OpenOrders.attributeTypeMap;
    }
}
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
