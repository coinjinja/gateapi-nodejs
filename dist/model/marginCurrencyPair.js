export class MarginCurrencyPair {
    static getAttributeTypeMap() {
        return MarginCurrencyPair.attributeTypeMap;
    }
}
MarginCurrencyPair.discriminator = undefined;
MarginCurrencyPair.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'base',
        baseName: 'base',
        type: 'string',
    },
    {
        name: 'quote',
        baseName: 'quote',
        type: 'string',
    },
    {
        name: 'leverage',
        baseName: 'leverage',
        type: 'number',
    },
    {
        name: 'minBaseAmount',
        baseName: 'min_base_amount',
        type: 'string',
    },
    {
        name: 'minQuoteAmount',
        baseName: 'min_quote_amount',
        type: 'string',
    },
    {
        name: 'maxQuoteAmount',
        baseName: 'max_quote_amount',
        type: 'string',
    },
];
