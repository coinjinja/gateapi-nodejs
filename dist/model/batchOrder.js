export class BatchOrder {
    static getAttributeTypeMap() {
        return BatchOrder.attributeTypeMap;
    }
}
BatchOrder.discriminator = undefined;
BatchOrder.attributeTypeMap = [
    {
        name: 'text',
        baseName: 'text',
        type: 'string',
    },
    {
        name: 'succeeded',
        baseName: 'succeeded',
        type: 'boolean',
    },
    {
        name: 'label',
        baseName: 'label',
        type: 'string',
    },
    {
        name: 'message',
        baseName: 'message',
        type: 'string',
    },
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
        name: 'updateTime',
        baseName: 'update_time',
        type: 'string',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'BatchOrder.Status',
    },
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'BatchOrder.Type',
    },
    {
        name: 'account',
        baseName: 'account',
        type: 'BatchOrder.Account',
    },
    {
        name: 'side',
        baseName: 'side',
        type: 'BatchOrder.Side',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
    {
        name: 'timeInForce',
        baseName: 'time_in_force',
        type: 'BatchOrder.TimeInForce',
    },
    {
        name: 'iceberg',
        baseName: 'iceberg',
        type: 'string',
    },
    {
        name: 'autoBorrow',
        baseName: 'auto_borrow',
        type: 'boolean',
    },
    {
        name: 'left',
        baseName: 'left',
        type: 'string',
    },
    {
        name: 'fillPrice',
        baseName: 'fill_price',
        type: 'string',
    },
    {
        name: 'filledTotal',
        baseName: 'filled_total',
        type: 'string',
    },
    {
        name: 'fee',
        baseName: 'fee',
        type: 'string',
    },
    {
        name: 'feeCurrency',
        baseName: 'fee_currency',
        type: 'string',
    },
    {
        name: 'pointFee',
        baseName: 'point_fee',
        type: 'string',
    },
    {
        name: 'gtFee',
        baseName: 'gt_fee',
        type: 'string',
    },
    {
        name: 'gtDiscount',
        baseName: 'gt_discount',
        type: 'boolean',
    },
    {
        name: 'rebatedFee',
        baseName: 'rebated_fee',
        type: 'string',
    },
    {
        name: 'rebatedFeeCurrency',
        baseName: 'rebated_fee_currency',
        type: 'string',
    },
];
(function (BatchOrder) {
    let Status;
    (function (Status) {
        Status[Status["Open"] = 'open'] = "Open";
        Status[Status["Closed"] = 'closed'] = "Closed";
        Status[Status["Cancelled"] = 'cancelled'] = "Cancelled";
    })(Status = BatchOrder.Status || (BatchOrder.Status = {}));
    let Type;
    (function (Type) {
        Type[Type["Limit"] = 'limit'] = "Limit";
    })(Type = BatchOrder.Type || (BatchOrder.Type = {}));
    let Account;
    (function (Account) {
        Account[Account["Spot"] = 'spot'] = "Spot";
        Account[Account["Margin"] = 'margin'] = "Margin";
    })(Account = BatchOrder.Account || (BatchOrder.Account = {}));
    let Side;
    (function (Side) {
        Side[Side["Buy"] = 'buy'] = "Buy";
        Side[Side["Sell"] = 'sell'] = "Sell";
    })(Side = BatchOrder.Side || (BatchOrder.Side = {}));
    let TimeInForce;
    (function (TimeInForce) {
        TimeInForce[TimeInForce["Gtc"] = 'gtc'] = "Gtc";
        TimeInForce[TimeInForce["Ioc"] = 'ioc'] = "Ioc";
        TimeInForce[TimeInForce["Poc"] = 'poc'] = "Poc";
    })(TimeInForce = BatchOrder.TimeInForce || (BatchOrder.TimeInForce = {}));
})(BatchOrder || (BatchOrder = {}));
