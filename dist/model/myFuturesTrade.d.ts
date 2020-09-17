export declare class MyFuturesTrade {
    'id'?: number;
    'createTime'?: number;
    'contract'?: string;
    'orderId'?: string;
    'size'?: number;
    'price'?: string;
    'role'?: MyFuturesTrade.Role;
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
export declare namespace MyFuturesTrade {
    enum Role {
        Taker,
        Maker
    }
}
