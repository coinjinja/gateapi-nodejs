export declare class BatchOrder {
    'text'?: string;
    'succeeded'?: boolean;
    'label'?: string;
    'message'?: string;
    'id'?: string;
    'createTime'?: string;
    'updateTime'?: string;
    'status'?: BatchOrder.Status;
    'currencyPair'?: string;
    'type'?: BatchOrder.Type;
    'account'?: BatchOrder.Account;
    'side'?: BatchOrder.Side;
    'amount'?: string;
    'price'?: string;
    'timeInForce'?: BatchOrder.TimeInForce;
    'autoBorrow'?: boolean;
    'left'?: string;
    'fillPrice'?: string;
    'filledTotal'?: string;
    'fee'?: string;
    'feeCurrency'?: string;
    'pointFee'?: string;
    'gtFee'?: string;
    'gtDiscount'?: boolean;
    'rebatedFee'?: string;
    'rebatedFeeCurrency'?: string;
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
export declare namespace BatchOrder {
    enum Status {
        Open,
        Closed,
        Cancelled
    }
    enum Type {
        Limit
    }
    enum Account {
        Spot,
        Margin
    }
    enum Side {
        Buy,
        Sell
    }
    enum TimeInForce {
        Gtc,
        Ioc,
        Poc
    }
}
