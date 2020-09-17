import { BatchOrder } from '../model/batchOrder';
import { CancelOrder } from '../model/cancelOrder';
import { CancelOrderResult } from '../model/cancelOrderResult';
import { CurrencyPair } from '../model/currencyPair';
import { OpenOrders } from '../model/openOrders';
import { Order } from '../model/order';
import { OrderBook } from '../model/orderBook';
import { SpotAccount } from '../model/spotAccount';
import { Ticker } from '../model/ticker';
import { Trade } from '../model/trade';
import { TradeFee } from '../model/tradeFee';
import { ApiClient } from './apiClient';
import { AxiosResponse } from 'axios';
export declare class SpotApi {
    protected client: ApiClient;
    constructor(client?: ApiClient);
    listCurrencyPairs(): Promise<{
        response: AxiosResponse;
        body: Array<CurrencyPair>;
    }>;
    getCurrencyPair(currencyPair: string): Promise<{
        response: AxiosResponse;
        body: CurrencyPair;
    }>;
    listTickers(opts: {
        currencyPair?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<Ticker>;
    }>;
    listOrderBook(currencyPair: string, opts: {
        interval?: string;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: OrderBook;
    }>;
    listTrades(currencyPair: string, opts: {
        limit?: number;
        lastId?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<Trade>;
    }>;
    listCandlesticks(currencyPair: string, opts: {
        limit?: number;
        from?: number;
        to?: number;
        interval?: '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d';
    }): Promise<{
        response: AxiosResponse;
        body: Array<Array<string>>;
    }>;
    getFee(opts: {
        currencyPair?: string;
    }): Promise<{
        response: AxiosResponse;
        body: TradeFee;
    }>;
    listSpotAccounts(opts: {
        currency?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<SpotAccount>;
    }>;
    createBatchOrders(order: Array<Order>): Promise<{
        response: AxiosResponse;
        body: Array<BatchOrder>;
    }>;
    listAllOpenOrders(opts: {
        page?: number;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<OpenOrders>;
    }>;
    listOrders(currencyPair: string, status: 'open' | 'finished', opts: {
        page?: number;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<Order>;
    }>;
    createOrder(order: Order): Promise<{
        response: AxiosResponse;
        body: Order;
    }>;
    cancelOrders(currencyPair: string, opts: {
        side?: 'buy' | 'sell';
        account?: 'spot' | 'margin';
    }): Promise<{
        response: AxiosResponse;
        body: Array<Order>;
    }>;
    cancelBatchOrders(cancelOrder: Array<CancelOrder>): Promise<{
        response: AxiosResponse;
        body: Array<CancelOrderResult>;
    }>;
    getOrder(orderId: string, currencyPair: string): Promise<{
        response: AxiosResponse;
        body: Order;
    }>;
    cancelOrder(orderId: string, currencyPair: string): Promise<{
        response: AxiosResponse;
        body: Order;
    }>;
    listMyTrades(currencyPair: string, opts: {
        limit?: number;
        page?: number;
        orderId?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<Trade>;
    }>;
}
