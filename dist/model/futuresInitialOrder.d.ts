export declare class FuturesInitialOrder {
    'contract': string;
    'size'?: number;
    'price': string;
    'close'?: boolean;
    'tif'?: FuturesInitialOrder.Tif;
    'text'?: string;
    'reduceOnly'?: boolean;
    'isReduceOnly'?: boolean;
    'isClose'?: boolean;
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
export declare namespace FuturesInitialOrder {
    enum Tif {
        Gtc,
        Ioc
    }
}
