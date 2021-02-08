export class FundingBookItem {
    static getAttributeTypeMap() {
        return FundingBookItem.attributeTypeMap;
    }
}
FundingBookItem.discriminator = undefined;
FundingBookItem.attributeTypeMap = [
    {
        name: 'rate',
        baseName: 'rate',
        type: 'string',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
    {
        name: 'days',
        baseName: 'days',
        type: 'number',
    },
];
