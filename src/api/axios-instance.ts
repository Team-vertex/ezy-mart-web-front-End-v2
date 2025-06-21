import axios, {AxiosResponse} from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BACK_END_API_URL ?? "http://localhost:8000/",
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
});

export interface DefaultResponse {
    isSuccess: boolean,
    message: string,
    data?: any
}

export interface DefaultErrorResponse {
    message: string,
    errors?: any
}

/**
 * Sends a POS request.
 *
 * @throws {AxiosError<DefaultErrorResponse>} On request failure, throws an AxiosError with error response data.
 */
export async function requestPos(payload: {
    "firstName": string,
    "lastName": string,
    'mobile': string,
    'email'?: string,
    'district': string,
    'city': string
}): Promise<AxiosResponse<DefaultResponse>> {
    return axiosInstance.post<DefaultResponse>('api/other/request-pos', payload)
}

/**
 * Sends a POS request.
 *
 * @throws {AxiosError<DefaultErrorResponse>} On request failure, throws an AxiosError with error response data.
 */
export function requestMobile(payload: {
    "firstName": string,
    "lastName": string,
    'mobile': string,
    'email'?: string,
}): Promise<AxiosResponse<DefaultResponse>> {
    return axiosInstance.post<DefaultResponse>('api/other/request-mobile', payload)
}

/**
 * Sends a POS request.
 *
 * @throws {AxiosError<DefaultErrorResponse>} On request failure, throws an AxiosError with error response data.
 */
export function contactUs(payload: {
    "firstName": string,
    "lastName"?: string,
    "email"?: string,
    "mobile": string,
    "message": string,
    'reason': string
}): Promise<AxiosResponse<DefaultResponse>> {
    return axiosInstance.post<DefaultResponse>('api/other/contact-us', payload)
}

