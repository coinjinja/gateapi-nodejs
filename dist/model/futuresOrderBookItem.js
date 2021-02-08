export class FuturesOrderBookItem {
    static getAttributeTypeMap() {
        return FuturesOrderBookItem.attributeTypeMap;
    }
}
FuturesOrderBookItem.discriminator = undefined;
FuturesOrderBookItem.attributeTypeMap = [
    {
        name: 'p',
        baseName: 'p',
        type: 'string',
    },
    {
        name: 's',
        baseName: 's',
        type: 'number',
    },
];
