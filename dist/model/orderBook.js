export class OrderBook {
    static getAttributeTypeMap() {
        return OrderBook.attributeTypeMap;
    }
}
OrderBook.discriminator = undefined;
OrderBook.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'number',
    },
    {
        name: 'asks',
        baseName: 'asks',
        type: 'Array<Array<string>>',
    },
    {
        name: 'bids',
        baseName: 'bids',
        type: 'Array<Array<string>>',
    },
];
