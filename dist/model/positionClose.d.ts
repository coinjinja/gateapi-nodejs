export declare class PositionClose {
    'time'?: number;
    'contract'?: string;
    'side'?: PositionClose.Side;
    'pnl'?: string;
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
export declare namespace PositionClose {
    enum Side {
        Long,
        Short
    }
}
