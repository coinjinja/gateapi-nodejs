"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trade = void 0;
class Trade {
    static getAttributeTypeMap() {
        return Trade.attributeTypeMap;
    }
}
exports.Trade = Trade;
Trade.discriminator = undefined;
Trade.attributeTypeMap = [
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
        name: 'side',
        baseName: 'side',
        type: 'Trade.Side',
    },
    {
        name: 'role',
        baseName: 'role',
        type: 'Trade.Role',
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
        name: 'orderId',
        baseName: 'order_id',
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
];
(function (Trade) {
    let Side;
    (function (Side) {
        Side[Side["Buy"] = 'buy'] = "Buy";
        Side[Side["Sell"] = 'sell'] = "Sell";
    })(Side = Trade.Side || (Trade.Side = {}));
    let Role;
    (function (Role) {
        Role[Role["Taker"] = 'taker'] = "Taker";
        Role[Role["Maker"] = 'maker'] = "Maker";
    })(Role = Trade.Role || (Trade.Role = {}));
})(Trade = exports.Trade || (exports.Trade = {}));
