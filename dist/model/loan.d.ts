export declare class Loan {
    'id'?: string;
    'createTime'?: string;
    'expireTime'?: string;
    'status'?: Loan.Status;
    'side': Loan.Side;
    'currency': string;
    'rate'?: string;
    'amount': string;
    'days': number;
    'autoRenew'?: boolean;
    'currencyPair'?: string;
    'left'?: string;
    'repaid'?: string;
    'paidInterest'?: string;
    'unpaidInterest'?: string;
    'feeRate'?: string;
    'origId'?: string;
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
export declare namespace Loan {
    enum Status {
        Open,
        Loaned,
        Finished,
        AutoRepaid
    }
    enum Side {
        Lend,
        Borrow
    }
}
