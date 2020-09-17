export declare class RepayRequest {
    'currencyPair': string;
    'currency': string;
    'mode': RepayRequest.Mode;
    'amount'?: string;
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
export declare namespace RepayRequest {
    enum Mode {
        All,
        Partial
    }
}
