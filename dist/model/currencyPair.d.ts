export declare class CurrencyPair {
    'id'?: string;
    'base'?: string;
    'quote'?: string;
    'fee'?: string;
    'minBaseAmount'?: string;
    'minQuoteAmount'?: string;
    'amountPrecision'?: number;
    'precision'?: number;
    'tradeStatus'?: CurrencyPair.TradeStatus;
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
export declare namespace CurrencyPair {
    enum TradeStatus {
        Untradable,
        Buyable,
        Sellable,
        Tradable
    }
}
