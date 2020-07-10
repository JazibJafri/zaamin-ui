import Config from 'react-native-config';

interface RequestOptions extends RequestInit {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

type RequestParams = {
    url: string;
    options?: RequestOptions;
};

interface ResponseObject extends Response {
    message?: string;
    success?: unknown[] | {};
}

export const request = async ({
    url,
    options,
}: RequestParams): Promise<ResponseObject> => {
    const method = options?.method || 'GET';
    const body = method === 'POST' && options?.body ? JSON.stringify(options.body) : null;
    const api = `${Config.API_URL}${url}`;
    const response: ResponseObject = await fetch(api, { ...options, method, body });
    const data = await response.json();
    const result = { ...data, success: JSON.parse(data?.success) };
    return result;
};
