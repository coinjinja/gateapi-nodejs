import { Order } from './order';
export declare class OpenOrders {
    'currencyPair'?: string;
    'total'?: number;
    'orders'?: Array<Order>;
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
