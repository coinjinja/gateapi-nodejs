export declare class Repayment {
    'id'?: string;
    'createTime'?: string;
    'principal'?: string;
    'interest'?: string;
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
