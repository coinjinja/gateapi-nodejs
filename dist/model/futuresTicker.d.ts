export declare class FuturesTicker {
    'contract'?: string;
    'last'?: string;
    'changePercentage'?: string;
    'totalSize'?: string;
    'low24h'?: string;
    'high24h'?: string;
    'volume24h'?: string;
    'volume24hBtc'?: string;
    'volume24hUsd'?: string;
    'volume24hBase'?: string;
    'volume24hQuote'?: string;
    'volume24hSettle'?: string;
    'markPrice'?: string;
    'fundingRate'?: string;
    'fundingRateIndicative'?: string;
    'indexPrice'?: string;
    'quantoBaseRate'?: string;
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
