export class Position {
    static getAttributeTypeMap() {
        return Position.attributeTypeMap;
    }
}
Position.discriminator = undefined;
Position.attributeTypeMap = [
    {
        name: 'user',
        baseName: 'user',
        type: 'number',
    },
    {
        name: 'contract',
        baseName: 'contract',
        type: 'string',
    },
    {
        name: 'size',
        baseName: 'size',
        type: 'number',
    },
    {
        name: 'leverage',
        baseName: 'leverage',
        type: 'string',
    },
    {
        name: 'riskLimit',
        baseName: 'risk_limit',
        type: 'string',
    },
    {
        name: 'leverageMax',
        baseName: 'leverage_max',
        type: 'string',
    },
    {
        name: 'maintenanceRate',
        baseName: 'maintenance_rate',
        type: 'string',
    },
    {
        name: 'value',
        baseName: 'value',
        type: 'string',
    },
    {
        name: 'margin',
        baseName: 'margin',
        type: 'string',
    },
    {
        name: 'entryPrice',
        baseName: 'entry_price',
        type: 'string',
    },
    {
        name: 'liqPrice',
        baseName: 'liq_price',
        type: 'string',
    },
    {
        name: 'markPrice',
        baseName: 'mark_price',
        type: 'string',
    },
    {
        name: 'unrealisedPnl',
        baseName: 'unrealised_pnl',
        type: 'string',
    },
    {
        name: 'realisedPnl',
        baseName: 'realised_pnl',
        type: 'string',
    },
    {
        name: 'historyPnl',
        baseName: 'history_pnl',
        type: 'string',
    },
    {
        name: 'lastClosePnl',
        baseName: 'last_close_pnl',
        type: 'string',
    },
    {
        name: 'realisedPoint',
        baseName: 'realised_point',
        type: 'string',
    },
    {
        name: 'historyPoint',
        baseName: 'history_point',
        type: 'string',
    },
    {
        name: 'adlRanking',
        baseName: 'adl_ranking',
        type: 'number',
    },
    {
        name: 'pendingOrders',
        baseName: 'pending_orders',
        type: 'number',
    },
    {
        name: 'closeOrder',
        baseName: 'close_order',
        type: 'PositionCloseOrder',
    },
    {
        name: 'mode',
        baseName: 'mode',
        type: 'Position.Mode',
    },
];
(function (Position) {
    let Mode;
    (function (Mode) {
        Mode[Mode["Single"] = 'single'] = "Single";
        Mode[Mode["DualLong"] = 'dual_long'] = "DualLong";
        Mode[Mode["DualShort"] = 'dual_short'] = "DualShort";
    })(Mode = Position.Mode || (Position.Mode = {}));
})(Position || (Position = {}));
