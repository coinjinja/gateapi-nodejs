export class InsuranceRecord {
    static getAttributeTypeMap() {
        return InsuranceRecord.attributeTypeMap;
    }
}
InsuranceRecord.discriminator = undefined;
InsuranceRecord.attributeTypeMap = [
    {
        name: 't',
        baseName: 't',
        type: 'number',
    },
    {
        name: 'b',
        baseName: 'b',
        type: 'string',
    },
];
