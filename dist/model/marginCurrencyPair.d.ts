export declare class MarginCurrencyPair {
    'id'?: string;
    'base'?: string;
    'quote'?: string;
    'leverage'?: number;
    'minBaseAmount'?: string;
    'minQuoteAmount'?: string;
    'maxQuoteAmount'?: string;
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
