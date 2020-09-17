import { FuturesInitialOrder } from './futuresInitialOrder';
import { FuturesPriceTrigger } from './futuresPriceTrigger';
export declare class FuturesPriceTriggeredOrder {
    'initial': FuturesInitialOrder;
    'trigger': FuturesPriceTrigger;
    'id'?: number;
    'user'?: number;
    'createTime'?: number;
    'finishTime'?: number;
    'tradeId'?: number;
    'status'?: FuturesPriceTriggeredOrder.Status;
    'finishAs'?: FuturesPriceTriggeredOrder.FinishAs;
    'reason'?: string;
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
export declare namespace FuturesPriceTriggeredOrder {
    enum Status {
        Open,
        Finished
    }
    enum FinishAs {
        Cancelled,
        Succeeded,
        Failed,
        Expired
    }
}
