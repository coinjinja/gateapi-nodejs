export class FuturesOrderBook {
    static getAttributeTypeMap() {
        return FuturesOrderBook.attributeTypeMap;
    }
}
FuturesOrderBook.discriminator = undefined;
FuturesOrderBook.attributeTypeMap = [
    {
        name: 'asks',
        baseName: 'asks',
        type: 'Array<FuturesOrderBookItem>',
    },
    {
        name: 'bids',
        baseName: 'bids',
        type: 'Array<FuturesOrderBookItem>',
    },
];
