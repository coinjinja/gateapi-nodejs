export class CancelOrderResult {
    static getAttributeTypeMap() {
        return CancelOrderResult.attributeTypeMap;
    }
}
CancelOrderResult.discriminator = undefined;
CancelOrderResult.attributeTypeMap = [
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
    {
        name: 'succeeded',
        baseName: 'succeeded',
        type: 'boolean',
    },
    {
        name: 'label',
        baseName: 'label',
        type: 'string',
    },
    {
        name: 'message',
        baseName: 'message',
        type: 'string',
    },
];
