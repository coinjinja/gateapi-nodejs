export declare class Contract {
    'name'?: string;
    'type'?: Contract.Type;
    'quantoMultiplier'?: string;
    'leverageMin'?: string;
    'leverageMax'?: string;
    'maintenanceRate'?: string;
    'markType'?: Contract.MarkType;
    'markPrice'?: string;
    'indexPrice'?: string;
    'lastPrice'?: string;
    'makerFeeRate'?: string;
    'takerFeeRate'?: string;
    'orderPriceRound'?: string;
    'markPriceRound'?: string;
    'fundingRate'?: string;
    'fundingInterval'?: number;
    'fundingNextApply'?: number;
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
export declare namespace Contract {
    enum Type {
        Inverse,
        Direct
    }
    enum MarkType {
        Internal,
        Index
    }
}
