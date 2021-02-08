export class Order {
    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
}
Order.discriminator = undefined;
Order.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'text',
        baseName: 'text',
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
        type: 'Order.Status',
    },
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'Order.Type',
    },
    {
        name: 'account',
        baseName: 'account',
        type: 'Order.Account',
    },
    {
        name: 'side',
        baseName: 'side',
        type: 'Order.Side',
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
        type: 'Order.TimeInForce',
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
(function (Order) {
    let Status;
    (function (Status) {
        Status[Status["Open"] = 'open'] = "Open";
        Status[Status["Closed"] = 'closed'] = "Closed";
        Status[Status["Cancelled"] = 'cancelled'] = "Cancelled";
    })(Status = Order.Status || (Order.Status = {}));
    let Type;
    (function (Type) {
        Type[Type["Limit"] = 'limit'] = "Limit";
    })(Type = Order.Type || (Order.Type = {}));
    let Account;
    (function (Account) {
        Account[Account["Spot"] = 'spot'] = "Spot";
        Account[Account["Margin"] = 'margin'] = "Margin";
    })(Account = Order.Account || (Order.Account = {}));
    let Side;
    (function (Side) {
        Side[Side["Buy"] = 'buy'] = "Buy";
        Side[Side["Sell"] = 'sell'] = "Sell";
    })(Side = Order.Side || (Order.Side = {}));
    let TimeInForce;
    (function (TimeInForce) {
        TimeInForce[TimeInForce["Gtc"] = 'gtc'] = "Gtc";
        TimeInForce[TimeInForce["Ioc"] = 'ioc'] = "Ioc";
        TimeInForce[TimeInForce["Poc"] = 'poc'] = "Poc";
    })(TimeInForce = Order.TimeInForce || (Order.TimeInForce = {}));
})(Order || (Order = {}));
