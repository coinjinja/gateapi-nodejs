export declare class DeliverySettlement {
    'time'?: number;
    'contract'?: string;
    'leverage'?: string;
    'size'?: number;
    'margin'?: string;
    'entryPrice'?: string;
    'settlePrice'?: string;
    'profit'?: string;
    'fee'?: string;
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
