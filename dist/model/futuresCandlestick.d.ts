export declare class FuturesCandlestick {
    't'?: number;
    'v'?: number;
    'c'?: string;
    'h'?: string;
    'l'?: string;
    'o'?: string;
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
