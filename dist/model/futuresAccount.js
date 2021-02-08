export class FuturesAccount {
    static getAttributeTypeMap() {
        return FuturesAccount.attributeTypeMap;
    }
}
FuturesAccount.discriminator = undefined;
FuturesAccount.attributeTypeMap = [
    {
        name: 'total',
        baseName: 'total',
        type: 'string',
    },
    {
        name: 'unrealisedPnl',
        baseName: 'unrealised_pnl',
        type: 'string',
    },
    {
        name: 'positionMargin',
        baseName: 'position_margin',
        type: 'string',
    },
    {
        name: 'orderMargin',
        baseName: 'order_margin',
        type: 'string',
    },
    {
        name: 'available',
        baseName: 'available',
        type: 'string',
    },
    {
        name: 'point',
        baseName: 'point',
        type: 'string',
    },
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'inDualMode',
        baseName: 'in_dual_mode',
        type: 'boolean',
    },
];
