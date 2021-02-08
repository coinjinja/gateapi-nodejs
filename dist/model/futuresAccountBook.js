export class FuturesAccountBook {
    static getAttributeTypeMap() {
        return FuturesAccountBook.attributeTypeMap;
    }
}
FuturesAccountBook.discriminator = undefined;
FuturesAccountBook.attributeTypeMap = [
    {
        name: 'time',
        baseName: 'time',
        type: 'number',
    },
    {
        name: 'change',
        baseName: 'change',
        type: 'string',
    },
    {
        name: 'balance',
        baseName: 'balance',
        type: 'string',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'FuturesAccountBook.Type',
    },
    {
        name: 'text',
        baseName: 'text',
        type: 'string',
    },
];
(function (FuturesAccountBook) {
    let Type;
    (function (Type) {
        Type[Type["Dnw"] = 'dnw'] = "Dnw";
        Type[Type["Pnl"] = 'pnl'] = "Pnl";
        Type[Type["Fee"] = 'fee'] = "Fee";
        Type[Type["Refr"] = 'refr'] = "Refr";
        Type[Type["Fund"] = 'fund'] = "Fund";
        Type[Type["PointDnw"] = 'point_dnw'] = "PointDnw";
        Type[Type["PointFee"] = 'point_fee'] = "PointFee";
        Type[Type["PointRefr"] = 'point_refr'] = "PointRefr";
    })(Type = FuturesAccountBook.Type || (FuturesAccountBook.Type = {}));
})(FuturesAccountBook || (FuturesAccountBook = {}));
