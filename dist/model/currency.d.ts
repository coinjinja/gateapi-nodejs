export declare class Currency {
    'currency'?: string;
    'delisted'?: boolean;
    'withdrawDisabled'?: boolean;
    'withdrawDelayed'?: boolean;
    'depositDisabled'?: boolean;
    'tradeDisabled'?: boolean;
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
