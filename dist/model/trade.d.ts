export declare class Trade {
    'id'?: string;
    'createTime'?: string;
    'side'?: Trade.Side;
    'role'?: Trade.Role;
    'amount'?: string;
    'price'?: string;
    'orderId'?: string;
    'fee'?: string;
    'feeCurrency'?: string;
    'pointFee'?: string;
    'gtFee'?: string;
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
export declare namespace Trade {
    enum Side {
        Buy,
        Sell
    }
    enum Role {
        Taker,
        Maker
    }
}
