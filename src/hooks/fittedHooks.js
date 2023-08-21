import { useState } from 'react';
import { getAllBanks, validateBank } from 'services/Api';

export const useGetBanks = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    if (isLoading === true) {
        getAllBanks()
        .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
        .catch(err => { setError(err.data); setIsLoading(false); setIsSuccess(false); setData(null) })
    }

    return {
        data,
        isLoading,
        error,
        isSuccess
    }
}

export const useValidateBank = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: (params) => {
            setIsLoading(true)
            validateBank(params)
                .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}
