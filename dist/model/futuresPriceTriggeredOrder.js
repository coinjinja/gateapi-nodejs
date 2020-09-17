"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesPriceTriggeredOrder = void 0;
class FuturesPriceTriggeredOrder {
    static getAttributeTypeMap() {
        return FuturesPriceTriggeredOrder.attributeTypeMap;
    }
}
exports.FuturesPriceTriggeredOrder = FuturesPriceTriggeredOrder;
FuturesPriceTriggeredOrder.discriminator = undefined;
FuturesPriceTriggeredOrder.attributeTypeMap = [
    {
        name: 'initial',
        baseName: 'initial',
        type: 'FuturesInitialOrder',
    },
    {
        name: 'trigger',
        baseName: 'trigger',
        type: 'FuturesPriceTrigger',
    },
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
        name: 'tradeId',
        baseName: 'trade_id',
        type: 'number',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'FuturesPriceTriggeredOrder.Status',
    },
    {
        name: 'finishAs',
        baseName: 'finish_as',
        type: 'FuturesPriceTriggeredOrder.FinishAs',
    },
    {
        name: 'reason',
        baseName: 'reason',
        type: 'string',
    },
];
(function (FuturesPriceTriggeredOrder) {
    let Status;
    (function (Status) {
        Status[Status["Open"] = 'open'] = "Open";
        Status[Status["Finished"] = 'finished'] = "Finished";
    })(Status = FuturesPriceTriggeredOrder.Status || (FuturesPriceTriggeredOrder.Status = {}));
    let FinishAs;
    (function (FinishAs) {
        FinishAs[FinishAs["Cancelled"] = 'cancelled'] = "Cancelled";
        FinishAs[FinishAs["Succeeded"] = 'succeeded'] = "Succeeded";
        FinishAs[FinishAs["Failed"] = 'failed'] = "Failed";
        FinishAs[FinishAs["Expired"] = 'expired'] = "Expired";
    })(FinishAs = FuturesPriceTriggeredOrder.FinishAs || (FuturesPriceTriggeredOrder.FinishAs = {}));
})(FuturesPriceTriggeredOrder = exports.FuturesPriceTriggeredOrder || (exports.FuturesPriceTriggeredOrder = {}));
