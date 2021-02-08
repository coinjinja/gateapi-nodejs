export class TradeFee {
    static getAttributeTypeMap() {
        return TradeFee.attributeTypeMap;
    }
}
TradeFee.discriminator = undefined;
TradeFee.attributeTypeMap = [
    {
        name: 'userId',
        baseName: 'user_id',
        type: 'number',
    },
    {
        name: 'takerFee',
        baseName: 'taker_fee',
        type: 'string',
    },
    {
        name: 'makerFee',
        baseName: 'maker_fee',
        type: 'string',
    },
    {
        name: 'gtDiscount',
        baseName: 'gt_discount',
        type: 'boolean',
    },
    {
        name: 'gtTakerFee',
        baseName: 'gt_taker_fee',
        type: 'string',
    },
    {
        name: 'gtMakerFee',
        baseName: 'gt_maker_fee',
        type: 'string',
    },
    {
        name: 'loanFee',
        baseName: 'loan_fee',
        type: 'string',
    },
    {
        name: 'pointType',
        baseName: 'point_type',
        type: 'string',
    },
];
