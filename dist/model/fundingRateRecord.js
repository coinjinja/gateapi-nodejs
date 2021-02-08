export class FundingRateRecord {
    static getAttributeTypeMap() {
        return FundingRateRecord.attributeTypeMap;
    }
}
FundingRateRecord.discriminator = undefined;
FundingRateRecord.attributeTypeMap = [
    {
        name: 't',
        baseName: 't',
        type: 'number',
    },
    {
        name: 'r',
        baseName: 'r',
        type: 'string',
    },
];
