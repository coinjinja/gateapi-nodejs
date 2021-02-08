export class SpotAccount {
    static getAttributeTypeMap() {
        return SpotAccount.attributeTypeMap;
    }
}
SpotAccount.discriminator = undefined;
SpotAccount.attributeTypeMap = [
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
];
