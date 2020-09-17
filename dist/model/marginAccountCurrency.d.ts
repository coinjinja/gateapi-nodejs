export declare class MarginAccountCurrency {
    'currency'?: string;
    'available'?: string;
    'locked'?: string;
    'borrowed'?: string;
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
