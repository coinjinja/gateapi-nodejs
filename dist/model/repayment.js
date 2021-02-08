export class Repayment {
    static getAttributeTypeMap() {
        return Repayment.attributeTypeMap;
    }
}
Repayment.discriminator = undefined;
Repayment.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'createTime',
        baseName: 'create_time',
        type: 'string',
    },
    {
        name: 'principal',
        baseName: 'principal',
        type: 'string',
    },
    {
        name: 'interest',
        baseName: 'interest',
        type: 'string',
    },
];
