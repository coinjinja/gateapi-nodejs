export declare class FuturesAccount {
    'total'?: string;
    'unrealisedPnl'?: string;
    'positionMargin'?: string;
    'orderMargin'?: string;
    'available'?: string;
    'point'?: string;
    'currency'?: string;
    'inDualMode'?: boolean;
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
