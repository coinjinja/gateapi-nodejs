export class WithdrawStatus {
    static getAttributeTypeMap() {
        return WithdrawStatus.attributeTypeMap;
    }
}
WithdrawStatus.discriminator = undefined;
WithdrawStatus.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
    },
    {
        name: 'nameCn',
        baseName: 'name_cn',
        type: 'string',
    },
    {
        name: 'deposit',
        baseName: 'deposit',
        type: 'string',
    },
    {
        name: 'withdrawPercent',
        baseName: 'withdraw_percent',
        type: 'string',
    },
    {
        name: 'withdrawFix',
        baseName: 'withdraw_fix',
        type: 'string',
    },
    {
        name: 'withdrawDayLimit',
        baseName: 'withdraw_day_limit',
        type: 'string',
    },
    {
        name: 'withdrawAmountMini',
        baseName: 'withdraw_amount_mini',
        type: 'string',
    },
    {
        name: 'withdrawDayLimitRemain',
        baseName: 'withdraw_day_limit_remain',
        type: 'string',
    },
    {
        name: 'withdrawEachtimeLimit',
        baseName: 'withdraw_eachtime_limit',
        type: 'string',
    },
];
