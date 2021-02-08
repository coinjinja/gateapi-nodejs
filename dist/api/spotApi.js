import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
export class SpotApi {
    constructor(client) {
        if (client) {
            this.client = client;
        }
        else {
            this.client = new ApiClient();
        }
    }
    async listCurrencies() {
        const localVarPath = this.client.basePath + '/spot/currencies';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<Currency>', authSettings);
    }
    async getCurrency(currency) {
        const localVarPath = this.client.basePath +
            '/spot/currencies/{currency}'.replace('{' + 'currency' + '}', encodeURIComponent(String(currency)));
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
            throw new Error('Required parameter currency was null or undefined when calling getCurrency.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Currency', authSettings);
    }
    async listCurrencyPairs() {
        const localVarPath = this.client.basePath + '/spot/currency_pairs';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<CurrencyPair>', authSettings);
    }
    async getCurrencyPair(currencyPair) {
        const localVarPath = this.client.basePath +
            '/spot/currency_pairs/{currency_pair}'.replace('{' + 'currency_pair' + '}', encodeURIComponent(String(currencyPair)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling getCurrencyPair.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'CurrencyPair', authSettings);
    }
    async listTickers(opts) {
        const localVarPath = this.client.basePath + '/spot/tickers';
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
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<Ticker>', authSettings);
    }
    async listOrderBook(currencyPair, opts) {
        const localVarPath = this.client.basePath + '/spot/order_book';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listOrderBook.');
        }
        opts = opts || {};
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        if (opts.interval !== undefined) {
            localVarQueryParameters['interval'] = ObjectSerializer.serialize(opts.interval, 'string');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.withId !== undefined) {
            localVarQueryParameters['with_id'] = ObjectSerializer.serialize(opts.withId, 'boolean');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'OrderBook', authSettings);
    }
    async listTrades(currencyPair, opts) {
        const localVarPath = this.client.basePath + '/spot/trades';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listTrades.');
        }
        opts = opts || {};
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.lastId !== undefined) {
            localVarQueryParameters['last_id'] = ObjectSerializer.serialize(opts.lastId, 'string');
        }
        if (opts.reverse !== undefined) {
            localVarQueryParameters['reverse'] = ObjectSerializer.serialize(opts.reverse, 'boolean');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<Trade>', authSettings);
    }
    async listCandlesticks(currencyPair, opts) {
        const localVarPath = this.client.basePath + '/spot/candlesticks';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listCandlesticks.');
        }
        opts = opts || {};
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
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
        return this.client.request(config, 'Array<Array<string>>', authSettings);
    }
    async getFee(opts) {
        const localVarPath = this.client.basePath + '/spot/fee';
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
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'TradeFee', authSettings);
    }
    async listSpotAccounts(opts) {
        const localVarPath = this.client.basePath + '/spot/accounts';
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
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<SpotAccount>', authSettings);
    }
    async createBatchOrders(order) {
        const localVarPath = this.client.basePath + '/spot/batch_orders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (order === null || order === undefined) {
            throw new Error('Required parameter order was null or undefined when calling createBatchOrders.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(order, 'Array<Order>'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<BatchOrder>', authSettings);
    }
    async listAllOpenOrders(opts) {
        const localVarPath = this.client.basePath + '/spot/open_orders';
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
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
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
        return this.client.request(config, 'Array<OpenOrders>', authSettings);
    }
    async listOrders(currencyPair, status, opts) {
        const localVarPath = this.client.basePath + '/spot/orders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listOrders.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listOrders.');
        }
        opts = opts || {};
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "'open' | 'finished'");
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
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
        return this.client.request(config, 'Array<Order>', authSettings);
    }
    async createOrder(order) {
        const localVarPath = this.client.basePath + '/spot/orders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (order === null || order === undefined) {
            throw new Error('Required parameter order was null or undefined when calling createOrder.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(order, 'Order'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Order', authSettings);
    }
    async cancelOrders(currencyPair, opts) {
        const localVarPath = this.client.basePath + '/spot/orders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling cancelOrders.');
        }
        opts = opts || {};
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        if (opts.side !== undefined) {
            localVarQueryParameters['side'] = ObjectSerializer.serialize(opts.side, "'buy' | 'sell'");
        }
        if (opts.account !== undefined) {
            localVarQueryParameters['account'] = ObjectSerializer.serialize(opts.account, "'spot' | 'margin'");
        }
        const config = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Order>', authSettings);
    }
    async cancelBatchOrders(cancelOrder) {
        const localVarPath = this.client.basePath + '/spot/cancel_batch_orders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (cancelOrder === null || cancelOrder === undefined) {
            throw new Error('Required parameter cancelOrder was null or undefined when calling cancelBatchOrders.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(cancelOrder, 'Array<CancelOrder>'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<CancelOrderResult>', authSettings);
    }
    async getOrder(orderId, currencyPair) {
        const localVarPath = this.client.basePath +
            '/spot/orders/{order_id}'.replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getOrder.');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling getOrder.');
        }
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Order', authSettings);
    }
    async cancelOrder(orderId, currencyPair) {
        const localVarPath = this.client.basePath +
            '/spot/orders/{order_id}'.replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling cancelOrder.');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling cancelOrder.');
        }
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        const config = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Order', authSettings);
    }
    async listMyTrades(currencyPair, opts) {
        const localVarPath = this.client.basePath + '/spot/my_trades';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling listMyTrades.');
        }
        opts = opts || {};
        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }
        if (opts.orderId !== undefined) {
            localVarQueryParameters['order_id'] = ObjectSerializer.serialize(opts.orderId, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Trade>', authSettings);
    }
}
