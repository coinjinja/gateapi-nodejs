export class MyFuturesTrade {
    static getAttributeTypeMap() {
        return MyFuturesTrade.attributeTypeMap;
    }
}
MyFuturesTrade.discriminator = undefined;
MyFuturesTrade.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'number',
    },
    {
        name: 'createTime',
        baseName: 'create_time',
        type: 'number',
    },
    {
        name: 'contract',
        baseName: 'contract',
        type: 'string',
    },
    {
        name: 'orderId',
        baseName: 'order_id',
        type: 'string',
    },
    {
        name: 'size',
        baseName: 'size',
        type: 'number',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
    {
        name: 'role',
        baseName: 'role',
        type: 'MyFuturesTrade.Role',
    },
];
(function (MyFuturesTrade) {
    let Role;
    (function (Role) {
        Role[Role["Taker"] = 'taker'] = "Taker";
        Role[Role["Maker"] = 'maker'] = "Maker";
    })(Role = MyFuturesTrade.Role || (MyFuturesTrade.Role = {}));
})(MyFuturesTrade || (MyFuturesTrade = {}));
