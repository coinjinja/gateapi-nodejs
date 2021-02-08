export class FuturesOrder {
    static getAttributeTypeMap() {
        return FuturesOrder.attributeTypeMap;
    }
}
FuturesOrder.discriminator = undefined;
FuturesOrder.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'number',
    },
    {
        name: 'user',
        baseName: 'user',
        type: 'number',
    },
    {
        name: 'createTime',
        baseName: 'create_time',
        type: 'number',
    },
    {
        name: 'finishTime',
        baseName: 'finish_time',
        type: 'number',
    },
    {
        name: 'finishAs',
        baseName: 'finish_as',
        type: 'FuturesOrder.FinishAs',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'FuturesOrder.Status',
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
        name: 'iceberg',
        baseName: 'iceberg',
        type: 'number',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
    {
        name: 'close',
        baseName: 'close',
        type: 'boolean',
    },
    {
        name: 'isClose',
        baseName: 'is_close',
        type: 'boolean',
    },
    {
        name: 'reduceOnly',
        baseName: 'reduce_only',
        type: 'boolean',
    },
    {
        name: 'isReduceOnly',
        baseName: 'is_reduce_only',
        type: 'boolean',
    },
    {
        name: 'isLiq',
        baseName: 'is_liq',
        type: 'boolean',
    },
    {
        name: 'tif',
        baseName: 'tif',
        type: 'FuturesOrder.Tif',
    },
    {
        name: 'left',
        baseName: 'left',
        type: 'number',
    },
    {
        name: 'fillPrice',
        baseName: 'fill_price',
        type: 'string',
    },
    {
        name: 'text',
        baseName: 'text',
        type: 'string',
    },
    {
        name: 'tkfr',
        baseName: 'tkfr',
        type: 'string',
    },
    {
        name: 'mkfr',
        baseName: 'mkfr',
        type: 'string',
    },
    {
        name: 'refu',
        baseName: 'refu',
        type: 'number',
    },
];
(function (FuturesOrder) {
    let FinishAs;
    (function (FinishAs) {
        FinishAs[FinishAs["Filled"] = 'filled'] = "Filled";
        FinishAs[FinishAs["Cancelled"] = 'cancelled'] = "Cancelled";
        FinishAs[FinishAs["Liquidated"] = 'liquidated'] = "Liquidated";
        FinishAs[FinishAs["Ioc"] = 'ioc'] = "Ioc";
        FinishAs[FinishAs["AutoDeleveraged"] = 'auto_deleveraged'] = "AutoDeleveraged";
        FinishAs[FinishAs["ReduceOnly"] = 'reduce_only'] = "ReduceOnly";
    })(FinishAs = FuturesOrder.FinishAs || (FuturesOrder.FinishAs = {}));
    let Status;
    (function (Status) {
        Status[Status["Open"] = 'open'] = "Open";
        Status[Status["Finished"] = 'finished'] = "Finished";
    })(Status = FuturesOrder.Status || (FuturesOrder.Status = {}));
    let Tif;
    (function (Tif) {
        Tif[Tif["Gtc"] = 'gtc'] = "Gtc";
        Tif[Tif["Ioc"] = 'ioc'] = "Ioc";
        Tif[Tif["Poc"] = 'poc'] = "Poc";
    })(Tif = FuturesOrder.Tif || (FuturesOrder.Tif = {}));
})(FuturesOrder || (FuturesOrder = {}));
