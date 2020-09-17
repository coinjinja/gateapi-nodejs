"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = void 0;
__exportStar(require("./apiClient"), exports);
__exportStar(require("./deliveryApi"), exports);
const deliveryApi_1 = require("./deliveryApi");
__exportStar(require("./futuresApi"), exports);
const futuresApi_1 = require("./futuresApi");
__exportStar(require("./marginApi"), exports);
const marginApi_1 = require("./marginApi");
__exportStar(require("./spotApi"), exports);
const spotApi_1 = require("./spotApi");
__exportStar(require("./walletApi"), exports);
const walletApi_1 = require("./walletApi");
__exportStar(require("./withdrawalApi"), exports);
const withdrawalApi_1 = require("./withdrawalApi");
exports.APIS = [deliveryApi_1.DeliveryApi, futuresApi_1.FuturesApi, marginApi_1.MarginApi, spotApi_1.SpotApi, walletApi_1.WalletApi, withdrawalApi_1.WithdrawalApi];
