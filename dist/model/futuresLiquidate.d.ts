export declare class FuturesLiquidate {
    'time'?: number;
    'contract'?: string;
    'leverage'?: string;
    'size'?: number;
    'margin'?: string;
    'entryPrice'?: string;
    'liqPrice'?: string;
    'markPrice'?: string;
    'orderId'?: number;
    'orderPrice'?: string;
    'fillPrice'?: string;
    'left'?: number;
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
