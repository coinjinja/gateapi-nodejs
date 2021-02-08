"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
class Contract {
    static getAttributeTypeMap() {
        return Contract.attributeTypeMap;
    }
}
exports.Contract = Contract;
Contract.discriminator = undefined;
Contract.attributeTypeMap = [
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'Contract.Type',
    },
    {
        name: 'quantoMultiplier',
        baseName: 'quanto_multiplier',
        type: 'string',
    },
    {
        name: 'leverageMin',
        baseName: 'leverage_min',
        type: 'string',
    },
    {
        name: 'leverageMax',
        baseName: 'leverage_max',
        type: 'string',
    },
    {
        name: 'maintenanceRate',
        baseName: 'maintenance_rate',
        type: 'string',
    },
    {
        name: 'markType',
        baseName: 'mark_type',
        type: 'Contract.MarkType',
    },
    {
        name: 'markPrice',
        baseName: 'mark_price',
        type: 'string',
    },
    {
        name: 'indexPrice',
        baseName: 'index_price',
        type: 'string',
    },
    {
        name: 'lastPrice',
        baseName: 'last_price',
        type: 'string',
    },
    {
        name: 'makerFeeRate',
        baseName: 'maker_fee_rate',
        type: 'string',
    },
    {
        name: 'takerFeeRate',
        baseName: 'taker_fee_rate',
        type: 'string',
    },
    {
        name: 'orderPriceRound',
        baseName: 'order_price_round',
        type: 'string',
    },
    {
        name: 'markPriceRound',
        baseName: 'mark_price_round',
        type: 'string',
    },
    {
        name: 'fundingRate',
        baseName: 'funding_rate',
        type: 'string',
    },
    {
        name: 'fundingInterval',
        baseName: 'funding_interval',
        type: 'number',
    },
    {
        name: 'fundingNextApply',
        baseName: 'funding_next_apply',
        type: 'number',
    },
    {
        name: 'riskLimitBase',
        baseName: 'risk_limit_base',
        type: 'string',
    },
    {
        name: 'riskLimitStep',
        baseName: 'risk_limit_step',
        type: 'string',
    },
    {
        name: 'riskLimitMax',
        baseName: 'risk_limit_max',
        type: 'string',
    },
    {
        name: 'orderSizeMin',
        baseName: 'order_size_min',
        type: 'number',
    },
    {
        name: 'orderSizeMax',
        baseName: 'order_size_max',
        type: 'number',
    },
    {
        name: 'orderPriceDeviate',
        baseName: 'order_price_deviate',
        type: 'string',
    },
    {
        name: 'refDiscountRate',
        baseName: 'ref_discount_rate',
        type: 'string',
    },
    {
        name: 'refRebateRate',
        baseName: 'ref_rebate_rate',
        type: 'string',
    },
    {
        name: 'orderbookId',
        baseName: 'orderbook_id',
        type: 'number',
    },
    {
        name: 'tradeId',
        baseName: 'trade_id',
        type: 'number',
    },
    {
        name: 'tradeSize',
        baseName: 'trade_size',
        type: 'number',
    },
    {
        name: 'positionSize',
        baseName: 'position_size',
        type: 'number',
    },
    {
        name: 'configChangeTime',
        baseName: 'config_change_time',
        type: 'number',
    },
    {
        name: 'inDelisting',
        baseName: 'in_delisting',
        type: 'boolean',
    },
    {
        name: 'ordersLimit',
        baseName: 'orders_limit',
        type: 'number',
    },
];
(function (Contract) {
    let Type;
    (function (Type) {
        Type[Type["Inverse"] = 'inverse'] = "Inverse";
        Type[Type["Direct"] = 'direct'] = "Direct";
    })(Type = Contract.Type || (Contract.Type = {}));
    let MarkType;
    (function (MarkType) {
        MarkType[MarkType["Internal"] = 'internal'] = "Internal";
        MarkType[MarkType["Index"] = 'index'] = "Index";
    })(MarkType = Contract.MarkType || (Contract.MarkType = {}));
})(Contract = exports.Contract || (exports.Contract = {}));
