export declare class FuturesTrade {
    'id'?: number;
    'createTime'?: number;
    'contract'?: string;
    'size'?: number;
    'price'?: string;
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
