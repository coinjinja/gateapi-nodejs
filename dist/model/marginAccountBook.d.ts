export declare class MarginAccountBook {
    'id'?: string;
    'time'?: string;
    'currency'?: string;
    'currencyPair'?: string;
    'change'?: string;
    'balance'?: string;
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
