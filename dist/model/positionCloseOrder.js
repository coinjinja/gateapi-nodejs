export class PositionCloseOrder {
    static getAttributeTypeMap() {
        return PositionCloseOrder.attributeTypeMap;
    }
}
PositionCloseOrder.discriminator = undefined;
PositionCloseOrder.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'number',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
    {
        name: 'isLiq',
        baseName: 'is_liq',
        type: 'boolean',
    },
];
