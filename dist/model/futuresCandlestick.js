export class FuturesCandlestick {
    static getAttributeTypeMap() {
        return FuturesCandlestick.attributeTypeMap;
    }
}
FuturesCandlestick.discriminator = undefined;
FuturesCandlestick.attributeTypeMap = [
    {
        name: 't',
        baseName: 't',
        type: 'number',
    },
    {
        name: 'v',
        baseName: 'v',
        type: 'number',
    },
    {
        name: 'c',
        baseName: 'c',
        type: 'string',
    },
    {
        name: 'h',
        baseName: 'h',
        type: 'string',
    },
    {
        name: 'l',
        baseName: 'l',
        type: 'string',
    },
    {
        name: 'o',
        baseName: 'o',
        type: 'string',
    },
];
