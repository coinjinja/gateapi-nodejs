import { GateApiV4Auth, ObjectSerializer } from '../model/models';
import globalAxios from 'axios';
export class ApiClient {
    constructor(basePath, axiosInstance = globalAxios) {
        this.axiosInstance = axiosInstance;
        this._basePath = 'https://api.gateio.ws/api/v4';
        this._defaultHeaders = {};
        this.authentications = {
            apiv4: new GateApiV4Auth(),
        };
        this._basePath = basePath || this._basePath;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    setApiKeySecret(key, secret) {
        const auth = this.authentications['apiv4'];
        auth.key = key;
        auth.secret = secret;
    }
    applyToRequest(config, authSettings) {
        for (const auth of authSettings) {
            const authenticator = this.authentications[auth];
            if (authenticator) {
                config = authenticator.applyToRequest(config);
            }
        }
        return config;
    }
    async request(config, responseType, authSettings) {
        return Promise.resolve(config)
            .then((c) => this.applyToRequest(c, authSettings))
            .then((c) => {
            return this.axiosInstance.request(c).then((rsp) => {
                let body = rsp.data;
                if (responseType.length > 0) {
                    body = ObjectSerializer.deserialize(rsp.data, responseType);
                }
                return { response: rsp, body: body };
            });
        });
    }
}
