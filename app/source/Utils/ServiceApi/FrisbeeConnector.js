/**
 * @providesModule GetCoins.Utils.ServiceApi.FrisbeeConnector
 */

import Frisbee from 'frisbee';
import qs from 'qs';

import { SERVICE_API } from 'app/constants/AppConstants';

// Utils
import DeviceUtils from 'app/source/Utils/DeviceUtils';

const frisbee = new Frisbee({
    baseURI: SERVICE_API.BASE_URI,
    headers: {
        Accept: 'application/json',
        app_token:'40gv9QVntPU0hb4R'
    },
});

const arrayFormat = 'indices';

export default class FrisbeeConnector {
    async performRequest(method, path, opts = {}) {
        try {
            const { params, formData, json } = opts;

            DeviceUtils.showNetworkActivity(true);

            const queries = params == null ? '' : `?${qs.stringify(params, { arrayFormat })}`;

            const nonGetOptions = formData != null
                ? {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: qs.stringify(formData, { arrayFormat }),
                } : {
                    headers: { 'Content-Type': 'application/json' },
                    body: json,
                };
            const options = method === 'get' ? undefined : nonGetOptions;

            const response = await frisbee[method](path + queries, options);
              console.log(response);
            DeviceUtils.showNetworkActivity(false);

            this.extractErrorsFromResponse(response);

            return response;
        } catch (error) {
            DeviceUtils.showNetworkActivity(false);
            throw error;
        }
    }

    extractErrorsFromResponse(response) {
        const { SUCCESS, UNAUTHORIZED } = SERVICE_API.RESPONSE_STATUSES;

        const { status, body } = response;

        if (status === SUCCESS && body != null)
            return;


        if (status != null && status === UNAUTHORIZED)
            throw new Error();

        if (body != null && body.error_description != null)
            throw new Error(body.error_description);

        throw new Error(`Request failed - Error code ${status}`);
    }
}
