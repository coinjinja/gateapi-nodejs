export declare class CancelOrderResult {
    'currencyPair'?: string;
    'id'?: string;
    'succeeded'?: boolean;
    'label'?: string;
    'message'?: string;
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
