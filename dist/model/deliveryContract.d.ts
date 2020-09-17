export declare class DeliveryContract {
    'name'?: string;
    'underlying'?: string;
    'cycle'?: DeliveryContract.Cycle;
    'type'?: DeliveryContract.Type;
    'quantoMultiplier'?: string;
    'leverageMin'?: string;
    'leverageMax'?: string;
    'maintenanceRate'?: string;
    'markType'?: DeliveryContract.MarkType;
    'markPrice'?: string;
    'indexPrice'?: string;
    'lastPrice'?: string;
    'makerFeeRate'?: string;
    'takerFeeRate'?: string;
    'orderPriceRound'?: string;
    'markPriceRound'?: string;
    'basisRate'?: string;
    'basisValue'?: string;
    'basisImpactValue'?: string;
    'settlePrice'?: string;
    'settlePriceInterval'?: number;
    'settlePriceDuration'?: number;
    'expireTime'?: number;
    'riskLimitBase'?: string;
    'riskLimitStep'?: string;
    'riskLimitMax'?: string;
    'orderSizeMin'?: number;
    'orderSizeMax'?: number;
    'orderPriceDeviate'?: string;
    'refDiscountRate'?: string;
    'refRebateRate'?: string;
    'orderbookId'?: number;
    'tradeId'?: number;
    'tradeSize'?: number;
    'positionSize'?: number;
    'configChangeTime'?: number;
    'inDelisting'?: boolean;
    'ordersLimit'?: number;
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
export declare namespace DeliveryContract {
    enum Cycle {
        WEEKLY,
        BIWEEKLY,
        QUARTERLY,
        BIQUARTERLY
    }
    enum Type {
        Inverse,
        Direct
    }
    enum MarkType {
        Internal,
        Index
    }
}
