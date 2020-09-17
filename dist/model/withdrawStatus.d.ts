export declare class WithdrawStatus {
    'currency'?: string;
    'name'?: string;
    'nameCn'?: string;
    'deposit'?: string;
    'withdrawPercent'?: string;
    'withdrawFix'?: string;
    'withdrawDayLimit'?: string;
    'withdrawAmountMini'?: string;
    'withdrawDayLimitRemain'?: string;
    'withdrawEachtimeLimit'?: string;
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
