export class FuturesPriceTrigger {
    static getAttributeTypeMap() {
        return FuturesPriceTrigger.attributeTypeMap;
    }
}
FuturesPriceTrigger.discriminator = undefined;
FuturesPriceTrigger.attributeTypeMap = [
    {
        name: 'strategyType',
        baseName: 'strategy_type',
        type: 'FuturesPriceTrigger.StrategyType',
    },
    {
        name: 'priceType',
        baseName: 'price_type',
        type: 'FuturesPriceTrigger.PriceType',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
    {
        name: 'rule',
        baseName: 'rule',
        type: 'FuturesPriceTrigger.Rule',
    },
    {
        name: 'expiration',
        baseName: 'expiration',
        type: 'number',
    },
];
(function (FuturesPriceTrigger) {
    let StrategyType;
    (function (StrategyType) {
        StrategyType[StrategyType["NUMBER_0"] = 0] = "NUMBER_0";
        StrategyType[StrategyType["NUMBER_1"] = 1] = "NUMBER_1";
    })(StrategyType = FuturesPriceTrigger.StrategyType || (FuturesPriceTrigger.StrategyType = {}));
    let PriceType;
    (function (PriceType) {
        PriceType[PriceType["NUMBER_0"] = 0] = "NUMBER_0";
        PriceType[PriceType["NUMBER_1"] = 1] = "NUMBER_1";
        PriceType[PriceType["NUMBER_2"] = 2] = "NUMBER_2";
    })(PriceType = FuturesPriceTrigger.PriceType || (FuturesPriceTrigger.PriceType = {}));
    let Rule;
    (function (Rule) {
        Rule[Rule["NUMBER_1"] = 1] = "NUMBER_1";
        Rule[Rule["NUMBER_2"] = 2] = "NUMBER_2";
    })(Rule = FuturesPriceTrigger.Rule || (FuturesPriceTrigger.Rule = {}));
})(FuturesPriceTrigger || (FuturesPriceTrigger = {}));
