export declare class Transfer {
    'currency': string;
    'from': Transfer.From;
    'to': Transfer.To;
    'amount': string;
    'currencyPair'?: string;
    'settle'?: string;
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
export declare namespace Transfer {
    enum From {
        Spot,
        Margin,
        Futures,
        Delivery
    }
    enum To {
        Spot,
        Margin,
        Futures,
        Delivery
    }
}
