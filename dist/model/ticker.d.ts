export declare class Ticker {
    'currencyPair'?: string;
    'last'?: string;
    'lowestAsk'?: string;
    'highestBid'?: string;
    'changePercentage'?: string;
    'baseVolume'?: string;
    'quoteVolume'?: string;
    'high24h'?: string;
    'low24h'?: string;
    'etfNetValue'?: string;
    'etfPreNetValue'?: string;
    'etfPreTimestamp'?: number;
    'etfLeverage'?: string;
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
