import axios from 'axios';

export class Service {

    constructor() {
        
    }

    async headers() {
        const USER_TOKEN: string = `446a6828200604377695aa034cf57e36`;
        const headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `${USER_TOKEN}`,
            'UserAddressId': `2378`,
            'StoreId': 1
        }
        return headers;
    }

    async get(url: string, params?: {}) {
        try {

            const response = await axios.get(url, {
                params: params ? { ...params } : null,
                headers: await this.headers()
            });
            return response?.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(url: string, data: object) {
        try {
            const response = await axios.post(url, data, {
                headers: await this.headers()
            });

            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async put(url: string, data: object) {
        try {

            const response = await axios.put(url, data, {
                headers: await this.headers() 
            });

            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(url: string, data?: object) {
        try {
  
            const response = await axios.delete(url, {
                headers: await this.headers(),
                data: data ? JSON.stringify(data) : null
            });

            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    private handleError(error: any) {
        // console.log(error.response.data);
        throw error.response.data
        // return error.response.data;
    }

}