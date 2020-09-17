import { MarginAccountCurrency } from './marginAccountCurrency';
export declare class MarginAccount {
    'currencyPair'?: string;
    'base'?: MarginAccountCurrency;
    'quote'?: MarginAccountCurrency;
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
