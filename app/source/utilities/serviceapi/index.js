import Singleton from 'singleton';

import { SERVICE_API } from 'app/constants/AppConstants';

import FrisbeeConnector from './FrisbeeConnector';

const { REQUEST_METHODS: { POST, GET } } = SERVICE_API;

class ServiceApi extends Singleton {

    constructor() {
        super();

        this.connector = new FrisbeeConnector();
    }

    /** login */

    async logIn(email, password) {
        try {
            const path = 'users/login/email';
            const json = {
                email: email,
                password: password
            };

            const response = await this.connector.requestAuth(GET, path, json);
            const userData = response.body;

            if (userData == null) 
                throw new Error('Data validation failed for User ${JSON.stringify(response.body)}');

            return userData;
        }
        catch (error) {
            throw error;
        }
    }

    /** Sing up */
    
    signUp = async(json) => {
        try {
            const path = 'users/register';
            const response = await this.connector.performRequest(POST, path, { json });
            console.log('_signupresponse', response.body);

            if (response.body === null) {
                return new Error('Something went wrong.');
            }

            return response.body
        }    
        catch (e) {
            throw error;
        }
    };

    /** Login with Mobile */

    loginWithMobile = async(mobileNumber) => {
        try {
            const path = 'users/login/mobile';
            const json = {
                mobileNumber: mobileNumber,
            };

            const response = await this.connector.performRequest(GET, path, { json });
            const userData = response.body;

            if (userData === null)
                return new Error('Data validation failed for User ${JSON.stringify(response.body)}');
            
            return userData;
        }
        catch (error) {
            throw error;
        }
    };

    /** Pin Verification */

    pinVerification = async (pin) => {
        try {
            const path = 'users/verify/pin';
            const json = {
                source: '1223',
                pin: pin,
            };

            const response = await this.connector.performRequest(POST, path, { json });
            const userData = response.body;

            if (userData === null) {
                return new Error('Data validation failed for User ${JSON.stringify(response.body)}');
            }
            
            return userData
        }
        catch (error) {
            throw error;
        }
    };

    /** Forgot password */

    forgetPassword = async (data) => {
        try {
            const path = 'users/password/forgot';
            const json = {
                source: data,
            };

            const response = await  this.connector.performRequest(POST, path, { json });
            const userData = response.body;

            if (userData === null) {
                return new Error('Data validation failed for User ${JSON.stringify(response.body)}');
            }

            return userData;
        }
        catch (error) {
            throw error;
        }
    };

    /** Reset password */

    resetPassword = async (data) => {
        try {
            const path = 'users/password/change';
            const json = {
                source: data.source,
                old_password: data.old,
                new_password: data.new
            };

            const response = await this.connector.performRequest(POST, path, { json });
            const userData = response.body;

            if (userData === null) {
                return new Error('Data validation failed for User ${JSON.stringify(response.body)}');
            }

            return userData;
        }
        catch (error) {
            throw error;
        }
    }
}

export default ServiceApi.get();