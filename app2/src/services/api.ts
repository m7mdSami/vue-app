export const APIs = {

    init(param?:any) {
        
        const BASE_URL      = 'https://app.markitworld.com/api/v2/user';

        const API       = {
            products                : `${BASE_URL}/products`,
        }
        return API;
    }
}