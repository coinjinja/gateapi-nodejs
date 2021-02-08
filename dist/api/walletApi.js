"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletApi = void 0;
const models_1 = require("../model/models");
const apiClient_1 = require("./apiClient");
class WalletApi {
    constructor(client) {
        if (client) {
            this.client = client;
        }
        else {
            this.client = new apiClient_1.ApiClient();
        }
    }
    async getDepositAddress(currency) {
        const localVarPath = this.client.basePath + '/wallet/deposit_address';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getDepositAddress.');
        }
        localVarQueryParameters['currency'] = models_1.ObjectSerializer.serialize(currency, 'string');
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'DepositAddress', authSettings);
    }
    async listWithdrawals(opts) {
        const localVarPath = this.client.basePath + '/wallet/withdrawals';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = models_1.ObjectSerializer.serialize(opts.currency, 'string');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(opts.to, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(opts.offset, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<LedgerRecord>', authSettings);
    }
    async listDeposits(opts) {
        const localVarPath = this.client.basePath + '/wallet/deposits';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = models_1.ObjectSerializer.serialize(opts.currency, 'string');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(opts.to, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(opts.offset, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<LedgerRecord>', authSettings);
    }
    async transfer(transfer) {
        const localVarPath = this.client.basePath + '/wallet/transfers';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        if (transfer === null || transfer === undefined) {
            throw new Error('Required parameter transfer was null or undefined when calling transfer.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: models_1.ObjectSerializer.serialize(transfer, 'Transfer'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, '', authSettings);
    }
    async listSubAccountTransfers(opts) {
        const localVarPath = this.client.basePath + '/wallet/sub_account_transfers';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = models_1.ObjectSerializer.serialize(opts.subUid, 'string');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(opts.to, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(opts.offset, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<SubAccountTransfer>', authSettings);
    }
    async transferWithSubAccount(subAccountTransfer) {
        const localVarPath = this.client.basePath + '/wallet/sub_account_transfers';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        if (subAccountTransfer === null || subAccountTransfer === undefined) {
            throw new Error('Required parameter subAccountTransfer was null or undefined when calling transferWithSubAccount.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: models_1.ObjectSerializer.serialize(subAccountTransfer, 'SubAccountTransfer'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, '', authSettings);
    }
    async listWithdrawStatus(opts) {
        const localVarPath = this.client.basePath + '/wallet/withdraw_status';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = models_1.ObjectSerializer.serialize(opts.currency, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<WithdrawStatus>', authSettings);
    }
    async listSubAccountBalances(opts) {
        const localVarPath = this.client.basePath + '/wallet/sub_account_balances';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = models_1.ObjectSerializer.serialize(opts.subUid, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<SubAccountBalance>', authSettings);
    }
}
exports.WalletApi = WalletApi;
