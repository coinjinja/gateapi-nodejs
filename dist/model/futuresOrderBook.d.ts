import { FuturesOrderBookItem } from './futuresOrderBookItem';
export declare class FuturesOrderBook {
    'asks': Array<FuturesOrderBookItem>;
    'bids': Array<FuturesOrderBookItem>;
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
