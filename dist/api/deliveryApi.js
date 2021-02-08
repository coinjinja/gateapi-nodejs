import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
export class DeliveryApi {
    constructor(client) {
        if (client) {
            this.client = client;
        }
        else {
            this.client = new ApiClient();
        }
    }
    async listDeliveryContracts(settle) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/contracts'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryContracts.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<DeliveryContract>', authSettings);
    }
    async getDeliveryContract(settle, contract) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/contracts/{contract}'
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
            throw new Error('Required parameter settle was null or undefined when calling getDeliveryContract.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling getDeliveryContract.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'DeliveryContract', authSettings);
    }
    async listDeliveryOrderBook(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/order_book'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryOrderBook.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listDeliveryOrderBook.');
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
    async listDeliveryTrades(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/trades'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryTrades.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listDeliveryTrades.');
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
    async listDeliveryCandlesticks(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/candlesticks'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryCandlesticks.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling listDeliveryCandlesticks.');
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
    async listDeliveryTickers(settle, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/tickers'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryTickers.');
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
    async listDeliveryInsuranceLedger(settle, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/insurance'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryInsuranceLedger.');
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
    async listDeliveryAccounts(settle) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/accounts'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryAccounts.');
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
    async listDeliveryAccountBook(settle, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/account_book'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryAccountBook.');
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
    async listDeliveryPositions(settle) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/positions'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryPositions.');
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
    async getDeliveryPosition(settle, contract) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/positions/{contract}'
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
            throw new Error('Required parameter settle was null or undefined when calling getDeliveryPosition.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling getDeliveryPosition.');
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
    async updateDeliveryPositionMargin(settle, contract, change) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/positions/{contract}/margin'
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
            throw new Error('Required parameter settle was null or undefined when calling updateDeliveryPositionMargin.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updateDeliveryPositionMargin.');
        }
        if (change === null || change === undefined) {
            throw new Error('Required parameter change was null or undefined when calling updateDeliveryPositionMargin.');
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
    async updateDeliveryPositionLeverage(settle, contract, leverage) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/positions/{contract}/leverage'
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
            throw new Error('Required parameter settle was null or undefined when calling updateDeliveryPositionLeverage.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updateDeliveryPositionLeverage.');
        }
        if (leverage === null || leverage === undefined) {
            throw new Error('Required parameter leverage was null or undefined when calling updateDeliveryPositionLeverage.');
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
    async updateDeliveryPositionRiskLimit(settle, contract, riskLimit) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/positions/{contract}/risk_limit'
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
            throw new Error('Required parameter settle was null or undefined when calling updateDeliveryPositionRiskLimit.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling updateDeliveryPositionRiskLimit.');
        }
        if (riskLimit === null || riskLimit === undefined) {
            throw new Error('Required parameter riskLimit was null or undefined when calling updateDeliveryPositionRiskLimit.');
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
    async listDeliveryOrders(settle, status, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryOrders.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listDeliveryOrders.');
        }
        opts = opts || {};
        if (opts.contract !== undefined) {
            localVarQueryParameters['contract'] = ObjectSerializer.serialize(opts.contract, 'string');
        }
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
    async createDeliveryOrder(settle, futuresOrder) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling createDeliveryOrder.');
        }
        if (futuresOrder === null || futuresOrder === undefined) {
            throw new Error('Required parameter futuresOrder was null or undefined when calling createDeliveryOrder.');
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
    async cancelDeliveryOrders(settle, contract, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling cancelDeliveryOrders.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling cancelDeliveryOrders.');
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
    async getDeliveryOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/orders/{order_id}'
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
            throw new Error('Required parameter settle was null or undefined when calling getDeliveryOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getDeliveryOrder.');
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
    async cancelDeliveryOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/orders/{order_id}'
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
            throw new Error('Required parameter settle was null or undefined when calling cancelDeliveryOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling cancelDeliveryOrder.');
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
    async getMyDeliveryTrades(settle, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/my_trades'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling getMyDeliveryTrades.');
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
    async listDeliveryPositionClose(settle, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/position_close'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryPositionClose.');
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
    async listDeliveryLiquidates(settle, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/liquidates'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliveryLiquidates.');
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
    async listDeliverySettlements(settle, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/settlements'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listDeliverySettlements.');
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
        return this.client.request(config, 'Array<DeliverySettlement>', authSettings);
    }
    async listPriceTriggeredDeliveryOrders(settle, status, opts) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/price_orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling listPriceTriggeredDeliveryOrders.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listPriceTriggeredDeliveryOrders.');
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
    async createPriceTriggeredDeliveryOrder(settle, futuresPriceTriggeredOrder) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/price_orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling createPriceTriggeredDeliveryOrder.');
        }
        if (futuresPriceTriggeredOrder === null || futuresPriceTriggeredOrder === undefined) {
            throw new Error('Required parameter futuresPriceTriggeredOrder was null or undefined when calling createPriceTriggeredDeliveryOrder.');
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
    async cancelPriceTriggeredDeliveryOrderList(settle, contract) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/price_orders'.replace('{' + 'settle' + '}', encodeURIComponent(String(settle)));
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
            throw new Error('Required parameter settle was null or undefined when calling cancelPriceTriggeredDeliveryOrderList.');
        }
        if (contract === null || contract === undefined) {
            throw new Error('Required parameter contract was null or undefined when calling cancelPriceTriggeredDeliveryOrderList.');
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
    async getPriceTriggeredDeliveryOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/price_orders/{order_id}'
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
            throw new Error('Required parameter settle was null or undefined when calling getPriceTriggeredDeliveryOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getPriceTriggeredDeliveryOrder.');
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
    async cancelPriceTriggeredDeliveryOrder(settle, orderId) {
        const localVarPath = this.client.basePath +
            '/delivery/{settle}/price_orders/{order_id}'
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
            throw new Error('Required parameter settle was null or undefined when calling cancelPriceTriggeredDeliveryOrder.');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling cancelPriceTriggeredDeliveryOrder.');
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
