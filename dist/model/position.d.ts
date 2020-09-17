import { PositionCloseOrder } from './positionCloseOrder';
export declare class Position {
    'user'?: number;
    'contract'?: string;
    'size'?: number;
    'leverage'?: string;
    'riskLimit'?: string;
    'leverageMax'?: string;
    'maintenanceRate'?: string;
    'value'?: string;
    'margin'?: string;
    'entryPrice'?: string;
    'liqPrice'?: string;
    'markPrice'?: string;
    'unrealisedPnl'?: string;
    'realisedPnl'?: string;
    'historyPnl'?: string;
    'lastClosePnl'?: string;
    'realisedPoint'?: string;
    'historyPoint'?: string;
    'adlRanking'?: number;
    'pendingOrders'?: number;
    'closeOrder'?: PositionCloseOrder;
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
