export declare class FuturesOrder {
    'id'?: number;
    'user'?: number;
    'createTime'?: number;
    'finishTime'?: number;
    'finishAs'?: FuturesOrder.FinishAs;
    'status'?: FuturesOrder.Status;
    'contract': string;
    'size': number;
    'iceberg'?: number;
    'price'?: string;
    'close'?: boolean;
    'isClose'?: boolean;
    'reduceOnly'?: boolean;
    'isReduceOnly'?: boolean;
    'isLiq'?: boolean;
    'tif'?: FuturesOrder.Tif;
    'left'?: number;
    'fillPrice'?: string;
    'text'?: string;
    'tkfr'?: string;
    'mkfr'?: string;
    'refu'?: number;
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
export declare namespace FuturesOrder {
    enum FinishAs {
        Filled,
        Cancelled,
        Liquidated,
        Ioc,
        AutoDeleveraged,
        ReduceOnly
    }
    enum Status {
        Open,
        Finished
    }
    enum Tif {
        Gtc,
        Ioc,
        Poc
    }
}
