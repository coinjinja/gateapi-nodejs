"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionClose = void 0;
class PositionClose {
    static getAttributeTypeMap() {
        return PositionClose.attributeTypeMap;
    }
}
exports.PositionClose = PositionClose;
PositionClose.discriminator = undefined;
PositionClose.attributeTypeMap = [
    {
        name: 'time',
        baseName: 'time',
        type: 'number',
    },
    {
        name: 'contract',
        baseName: 'contract',
        type: 'string',
    },
    {
        name: 'side',
        baseName: 'side',
        type: 'PositionClose.Side',
    },
    {
        name: 'pnl',
        baseName: 'pnl',
        type: 'string',
    },
    {
        name: 'text',
        baseName: 'text',
        type: 'string',
    },
];
(function (PositionClose) {
    let Side;
    (function (Side) {
        Side[Side["Long"] = 'long'] = "Long";
        Side[Side["Short"] = 'short'] = "Short";
    })(Side = PositionClose.Side || (PositionClose.Side = {}));
})(PositionClose = exports.PositionClose || (exports.PositionClose = {}));
