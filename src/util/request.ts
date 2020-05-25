import { COMMON_HEADERS } from 'util/constants';

interface RequestParams {
    path: string;
    method: string;
    params?: string;
    body?: object;
}

const createUrl = (path: string, params?: string): string => {
    return params ? `${path}/${params}` : `${path}/`;
};

const createOptions = (method: string, body?: object) => {
    const options = {
        method,
        body: JSON.stringify(body),
        headers: { ...COMMON_HEADERS },
    };
    return options;
};

const request = async (args: RequestParams) => {
    const url = createUrl(args.path, args.params);
    const options = createOptions(args.method, args.body);
    try {
        const response: Response = await fetch(url, options);
        return {
            success: true,
            response: await response.json(),
        };
    } catch (error) {
        return {
            success: false,
            response: error,
        };
    }
};

export { request };
