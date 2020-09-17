export declare class SubAccountTransfer {
    'currency': string;
    'subAccount': string;
    'direction': SubAccountTransfer.Direction;
    'amount': string;
    'uid'?: string;
    'timest'?: string;
    'source'?: string;
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
export declare namespace SubAccountTransfer {
    enum Direction {
        To,
        From
    }
}
