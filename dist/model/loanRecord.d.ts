export declare class LoanRecord {
    'id'?: string;
    'loanId'?: string;
    'createTime'?: string;
    'expireTime'?: string;
    'status'?: LoanRecord.Status;
    'borrowUserId'?: string;
    'currency'?: string;
    'rate'?: string;
    'amount'?: string;
    'days'?: number;
    'autoRenew'?: boolean;
    'repaid'?: string;
    'paidInterest'?: string;
    'unpaidInterest'?: string;
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
export declare namespace LoanRecord {
    enum Status {
        Loaned,
        Finished
    }
}
