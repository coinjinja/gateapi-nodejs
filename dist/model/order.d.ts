export declare class Order {
    'id'?: string;
    'text'?: string;
    'createTime'?: string;
    'updateTime'?: string;
    'status'?: Order.Status;
    'currencyPair': string;
    'type'?: Order.Type;
    'account'?: Order.Account;
    'side': Order.Side;
    'amount': string;
    'price': string;
    'timeInForce'?: Order.TimeInForce;
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
export declare namespace Order {
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
