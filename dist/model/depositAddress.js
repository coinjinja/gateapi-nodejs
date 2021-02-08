export class DepositAddress {
    static getAttributeTypeMap() {
        return DepositAddress.attributeTypeMap;
    }
}
DepositAddress.discriminator = undefined;
DepositAddress.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'address',
        baseName: 'address',
        type: 'string',
    },
];
