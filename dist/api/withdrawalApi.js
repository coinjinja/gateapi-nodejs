"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalApi = void 0;
const models_1 = require("../model/models");
const apiClient_1 = require("./apiClient");
class WithdrawalApi {
    constructor(client) {
        if (client) {
            this.client = client;
        }
        else {
            this.client = new apiClient_1.ApiClient();
        }
    }
    async withdraw(ledgerRecord) {
        const localVarPath = this.client.basePath + '/withdrawals';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (ledgerRecord === null || ledgerRecord === undefined) {
            throw new Error('Required parameter ledgerRecord was null or undefined when calling withdraw.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: models_1.ObjectSerializer.serialize(ledgerRecord, 'LedgerRecord'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'LedgerRecord', authSettings);
    }
}
exports.WithdrawalApi = WithdrawalApi;
