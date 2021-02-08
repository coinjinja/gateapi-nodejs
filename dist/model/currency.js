export class Currency {
    static getAttributeTypeMap() {
        return Currency.attributeTypeMap;
    }
}
Currency.discriminator = undefined;
Currency.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'delisted',
        baseName: 'delisted',
        type: 'boolean',
    },
    {
        name: 'withdrawDisabled',
        baseName: 'withdraw_disabled',
        type: 'boolean',
    },
    {
        name: 'withdrawDelayed',
        baseName: 'withdraw_delayed',
        type: 'boolean',
    },
    {
        name: 'depositDisabled',
        baseName: 'deposit_disabled',
        type: 'boolean',
    },
    {
        name: 'tradeDisabled',
        baseName: 'trade_disabled',
        type: 'boolean',
    },
];
