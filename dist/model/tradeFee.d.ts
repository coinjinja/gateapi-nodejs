export declare class TradeFee {
    'userId'?: number;
    'takerFee'?: string;
    'makerFee'?: string;
    'gtDiscount'?: boolean;
    'gtTakerFee'?: string;
    'gtMakerFee'?: string;
    'loanFee'?: string;
    'pointType'?: string;
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
