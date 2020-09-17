export declare class FundingAccount {
    'currency'?: string;
    'available'?: string;
    'locked'?: string;
    'lent'?: string;
    'totalLent'?: string;
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
