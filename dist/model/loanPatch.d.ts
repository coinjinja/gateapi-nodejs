export declare class LoanPatch {
    'currency': string;
    'side': LoanPatch.Side;
    'autoRenew': boolean;
    'currencyPair'?: string;
    'loanId'?: string;
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
export declare namespace LoanPatch {
    enum Side {
        Lend,
        Borrow
    }
}
