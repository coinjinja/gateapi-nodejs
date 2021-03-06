export declare class OrderBook {
    'id'?: number;
    'asks': Array<Array<string>>;
    'bids': Array<Array<string>>;
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
