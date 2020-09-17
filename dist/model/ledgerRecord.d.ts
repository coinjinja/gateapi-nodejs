export declare class LedgerRecord {
    'id'?: string;
    'txid'?: string;
    'timestamp'?: string;
    'amount': string;
    'currency': string;
    'address'?: string;
    'memo'?: string;
    'status'?: LedgerRecord.Status;
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
export declare namespace LedgerRecord {
    enum Status {
        DONE,
        CANCEL,
        REQUEST,
        MANUAL,
        BCODE
    }
}
