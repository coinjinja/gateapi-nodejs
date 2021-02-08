export declare class ContractStat {
    'time'?: number;
    'lsrTaker'?: number;
    'lsrAccount'?: number;
    'longLiqSize'?: number;
    'longLiqAmount'?: number;
    'longLiqUsd'?: number;
    'shortLiqSize'?: number;
    'shortLiqAmount'?: number;
    'shortLiqUsd'?: number;
    'openInterest'?: number;
    'openInterestUsd'?: number;
    'topLsrAccount'?: number;
    'topLsrSize'?: number;
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
