export declare class FuturesPriceTrigger {
    'strategyType'?: FuturesPriceTrigger.StrategyType;
    'priceType'?: FuturesPriceTrigger.PriceType;
    'price'?: string;
    'rule'?: FuturesPriceTrigger.Rule;
    'expiration'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace FuturesPriceTrigger {
    enum StrategyType {
        NUMBER_0,
        NUMBER_1
    }
    enum PriceType {
        NUMBER_0,
        NUMBER_1,
        NUMBER_2
    }
    enum Rule {
        NUMBER_1,
        NUMBER_2
    }
}
