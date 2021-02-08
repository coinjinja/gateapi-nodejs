import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
export class FuturesApi {
    constructor(client) {
        if (client) {
            this.client = client;
        }
        else {
            this.client = new ApiClient();
        }
    }
    async listFuturesContracts(settle) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/contracts'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesContracts.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<Contract>', authSettings);
    }
    async getFuturesContract(settle, contract) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/contracts/{contract}'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling getFuturesContract.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling getFuturesContract.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Contract', authSettings);
    }
    async listFuturesOrderBook(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/order_book'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesOrderBook.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listFuturesOrderBook.');
        }
        opts = opts || {};
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        if (opts.interval !== undefined) {
            localVarQueryParameters['interval'] = ObjectSerializer.serialize(opts.interval, "'0' | '0.1' | '0.01'");
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'FuturesOrderBook', authSettings);
    }
    async listFuturesTrades(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/trades'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesTrades.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listFuturesTrades.');
        }
        opts = opts || {};
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.lastId !== undefined) {
            localVarQueryParameters['last_id'] = ObjectSerializer.serialize(opts.lastId, 'string');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<FuturesTrade>', authSettings);
    }
    async listFuturesCandlesticks(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/candlesticks'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesCandlesticks.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listFuturesCandlesticks.');
        }
        opts = opts || {};
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.interval !== undefined) {
            localVarQueryParameters['interval'] = ObjectSerializer.serialize(opts.interval, "'10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d'");
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<FuturesCandlestick>', authSettings);
    }
    async listFuturesTickers(settle, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/tickers'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesTickers.');
        }
        opts = opts || {};
        if (opts.contract !== undefined) {
            localVarQueryParameters['contract'] = ObjectSerializer.serialize(opts.contract, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<FuturesTicker>', authSettings);
    }
    async listFuturesFundingRateHistory(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/funding_rate'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesFundingRateHistory.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listFuturesFundingRateHistory.');
        }
        opts = opts || {};
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<FundingRateRecord>', authSettings);
    }
    async listFuturesInsuranceLedger(settle, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/insurance'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesInsuranceLedger.');
        }
        opts = opts || {};
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<InsuranceRecord>', authSettings);
    }
    async listContractStats(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/contract_stats'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listContractStats.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listContractStats.');
        }
        opts = opts || {};
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.interval !== undefined) {
            localVarQueryParameters['interval'] = ObjectSerializer.serialize(opts.interval, "'5m' | '15m' | '30m' | '1h' | '4h' | '1d'");
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<ContractStat>', authSettings);
    }
    async listLiquidatedOrders(settle, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/liq_orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listLiquidatedOrders.');
        }
        opts = opts || {};
        if (opts.contract !== undefined) {
            localVarQueryParameters['contract'] = ObjectSerializer.serialize(opts.contract, 'string');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<FuturesLiquidate>', authSettings);
    }
    async listFuturesAccounts(settle) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/accounts'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesAccounts.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'FuturesAccount', authSettings);
    }
    async listFuturesAccountBook(settle, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/account_book'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesAccountBook.');
        }
        opts = opts || {};
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }
        if (opts.type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(opts.type, "'dnw' | 'pnl' | 'fee' | 'refr' | 'fund' | 'point_dnw' | 'point_fee' | 'point_refr'");
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<FuturesAccountBook>', authSettings);
    }
    async listPositions(settle) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/positions'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listPositions.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Position>', authSettings);
    }
    async getPosition(settle, contract) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/positions/{contract}'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling getPosition.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling getPosition.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Position', authSettings);
    }
    async updatePositionMargin(settle, contract, change) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/positions/{contract}/margin'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling updatePositionMargin.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updatePositionMargin.');
        }
        if (change === null || change === undefined) {
            throw new Error('Required parameter change was null or undefined when calling updatePositionMargin.');
        }
        localVarQueryParameters['change'] = ObjectSerializer.serialize(change, 'string');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Position', authSettings);
    }
    async updatePositionLeverage(settle, contract, leverage) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/positions/{contract}/leverage'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling updatePositionLeverage.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updatePositionLeverage.');
        }
        if (leverage === null || leverage === undefined) {
            throw new Error('Required parameter leverage was null or undefined when calling updatePositionLeverage.');
        }
        localVarQueryParameters['leverage'] = ObjectSerializer.serialize(leverage, 'string');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Position', authSettings);
    }
    async updatePositionRiskLimit(settle, contract, riskLimit) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/positions/{contract}/risk_limit'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling updatePositionRiskLimit.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updatePositionRiskLimit.');
        }
        if (riskLimit === null || riskLimit === undefined) {
            throw new Error('Required parameter riskLimit was null or undefined when calling updatePositionRiskLimit.');
        }
        localVarQueryParameters['risk_limit'] = ObjectSerializer.serialize(riskLimit, 'string');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Position', authSettings);
    }
    async setDualMode(settle, dualMode) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/dual_mode'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling setDualMode.');
        }
        if (dualMode === null || dualMode === undefined) {
            throw new Error('Required parameter dualMode was null or undefined when calling setDualMode.');
        }
        localVarQueryParameters['dual_mode'] = ObjectSerializer.serialize(dualMode, 'boolean');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'FuturesAccount', authSettings);
    }
    async getDualModePosition(settle, contract) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/dual_comp/positions/{contract}'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling getDualModePosition.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling getDualModePosition.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Position>', authSettings);
    }
    async updateDualModePositionMargin(settle, contract, change) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/dual_comp/positions/{contract}/margin'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling updateDualModePositionMargin.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updateDualModePositionMargin.');
        }
        if (change === null || change === undefined) {
            throw new Error('Required parameter change was null or undefined when calling updateDualModePositionMargin.');
        }
        localVarQueryParameters['change'] = ObjectSerializer.serialize(change, 'string');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Position>', authSettings);
    }
    async updateDualModePositionLeverage(settle, contract, leverage) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/dual_comp/positions/{contract}/leverage'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling updateDualModePositionLeverage.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updateDualModePositionLeverage.');
        }
        if (leverage === null || leverage === undefined) {
            throw new Error('Required parameter leverage was null or undefined when calling updateDualModePositionLeverage.');
        }
        localVarQueryParameters['leverage'] = ObjectSerializer.serialize(leverage, 'string');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Position>', authSettings);
    }
    async updateDualModePositionRiskLimit(settle, contract, riskLimit) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/dual_comp/positions/{contract}/risk_limit'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'contract' + '}', encodeURIComponent(String(contract)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling updateDualModePositionRiskLimit.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updateDualModePositionRiskLimit.');
        }
        if (riskLimit === null || riskLimit === undefined) {
            throw new Error('Required parameter riskLimit was null or undefined when calling updateDualModePositionRiskLimit.');
        }
        localVarQueryParameters['risk_limit'] = ObjectSerializer.serialize(riskLimit, 'string');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Position>', authSettings);
    }
    async listFuturesOrders(settle, contract, status, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listFuturesOrders.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listFuturesOrders.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listFuturesOrders.');
        }
        opts = opts || {};
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "'open' | 'finished'");
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }
        if (opts.lastId !== undefined) {
            localVarQueryParameters['last_id'] = ObjectSerializer.serialize(opts.lastId, 'string');
        }
        if (opts.countTotal !== undefined) {
            localVarQueryParameters['count_total'] = ObjectSerializer.serialize(opts.countTotal, '0 | 1');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<FuturesOrder>', authSettings);
    }
    async createFuturesOrder(settle, futuresOrder) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling createFuturesOrder.');
        }
        if (futuresOrder === null || futuresOrder === undefined) {
            throw new Error('Required parameter futuresOrder was null or undefined when calling createFuturesOrder.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(futuresOrder, 'FuturesOrder'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'FuturesOrder', authSettings);
    }
    async cancelFuturesOrders(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling cancelFuturesOrders.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling cancelFuturesOrders.');
        }
        opts = opts || {};
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        if (opts.side !== undefined) {
            localVarQueryParameters['side'] = ObjectSerializer.serialize(opts.side, "'ask' | 'bid'");
        }
        const config = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<FuturesOrder>', authSettings);
    }
    async getFuturesOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/orders/{order_id}'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling getFuturesOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getFuturesOrder.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'FuturesOrder', authSettings);
    }
    async cancelFuturesOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/orders/{order_id}'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling cancelFuturesOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling cancelFuturesOrder.');
        }
        const config = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'FuturesOrder', authSettings);
    }
    async getMyTrades(settle, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/my_trades'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling getMyTrades.');
        }
        opts = opts || {};
        if (opts.contract !== undefined) {
            localVarQueryParameters['contract'] = ObjectSerializer.serialize(opts.contract, 'string');
        }
        if (opts.order !== undefined) {
            localVarQueryParameters['order'] = ObjectSerializer.serialize(opts.order, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }
        if (opts.lastId !== undefined) {
            localVarQueryParameters['last_id'] = ObjectSerializer.serialize(opts.lastId, 'string');
        }
        if (opts.countTotal !== undefined) {
            localVarQueryParameters['count_total'] = ObjectSerializer.serialize(opts.countTotal, '0 | 1');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<MyFuturesTrade>', authSettings);
    }
    async listPositionClose(settle, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/position_close'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listPositionClose.');
        }
        opts = opts || {};
        if (opts.contract !== undefined) {
            localVarQueryParameters['contract'] = ObjectSerializer.serialize(opts.contract, 'string');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<PositionClose>', authSettings);
    }
    async listLiquidates(settle, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/liquidates'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listLiquidates.');
        }
        opts = opts || {};
        if (opts.contract !== undefined) {
            localVarQueryParameters['contract'] = ObjectSerializer.serialize(opts.contract, 'string');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.at !== undefined) {
            localVarQueryParameters['at'] = ObjectSerializer.serialize(opts.at, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<FuturesLiquidate>', authSettings);
    }
    async listPriceTriggeredOrders(settle, status, opts) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/price_orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling listPriceTriggeredOrders.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listPriceTriggeredOrders.');
        }
        opts = opts || {};
        localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "'open' | 'finished'");
        if (opts.contract !== undefined) {
            localVarQueryParameters['contract'] = ObjectSerializer.serialize(opts.contract, 'string');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<FuturesPriceTriggeredOrder>', authSettings);
    }
    async createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/price_orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling createPriceTriggeredOrder.');
        }
        if (futuresPriceTriggeredOrder === null || futuresPriceTriggeredOrder === undefined) {
            throw new Error('Required parameter futuresPriceTriggeredOrder was null or undefined when calling createPriceTriggeredOrder.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(futuresPriceTriggeredOrder, 'FuturesPriceTriggeredOrder'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'TriggerOrderResponse', authSettings);
    }
    async cancelPriceTriggeredOrderList(settle, contract) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/price_orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling cancelPriceTriggeredOrderList.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling cancelPriceTriggeredOrderList.');
        }
        localVarQueryParameters['contract'] = ObjectSerializer.serialize(contract, 'string');
        const config = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<FuturesPriceTriggeredOrder>', authSettings);
    }
    async getPriceTriggeredOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/price_orders/{order_id}'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling getPriceTriggeredOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getPriceTriggeredOrder.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'FuturesPriceTriggeredOrder', authSettings);
    }
    async cancelPriceTriggeredOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/futures/{settle}/price_orders/{order_id}'
                .replace('{' + 'settle' + '}', encodeURIComponent(String(settle)))
                .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (settle === null || settle === undefined) {
            throw new Error('Required parameter settle was null or undefined when calling cancelPriceTriggeredOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling cancelPriceTriggeredOrder.');
        }
        const config = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'FuturesPriceTriggeredOrder', authSettings);
    }
}
