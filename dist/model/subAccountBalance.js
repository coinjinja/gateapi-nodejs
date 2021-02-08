export class SubAccountBalance {
    static getAttributeTypeMap() {
        return SubAccountBalance.attributeTypeMap;
    }
}
SubAccountBalance.discriminator = undefined;
SubAccountBalance.attributeTypeMap = [
    {
        name: 'uid',
        baseName: 'uid',
        type: 'string',
    },
    {
        name: 'available',
        baseName: 'available',
        type: '{ [key: string]: string; }',
    },
];
