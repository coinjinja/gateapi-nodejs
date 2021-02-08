export class FundingAccount {
    static getAttributeTypeMap() {
        return FundingAccount.attributeTypeMap;
    }
}
FundingAccount.discriminator = undefined;
FundingAccount.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'available',
        baseName: 'available',
        type: 'string',
    },
    {
        name: 'locked',
        baseName: 'locked',
        type: 'string',
    },
    {
        name: 'lent',
        baseName: 'lent',
        type: 'string',
    },
    {
        name: 'totalLent',
        baseName: 'total_lent',
        type: 'string',
    },
];
