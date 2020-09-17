export declare class FuturesAccountBook {
    'time'?: number;
    'change'?: string;
    'balance'?: string;
    'type'?: FuturesAccountBook.Type;
    'text'?: string;
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
export declare namespace FuturesAccountBook {
    enum Type {
        Dnw,
        Pnl,
        Fee,
        Refr,
        Fund,
        PointDnw,
        PointFee,
        PointRefr
    }
}
