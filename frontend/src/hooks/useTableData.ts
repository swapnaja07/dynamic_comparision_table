import { useEffect, useMemo, useState } from 'react';

import { fetchTableData } from '../services/api';

import { normalizeData } from '../utils/normalizeData';

export const useTableData = (
    dates: string[],
    page: number
) => {

    const [rawData, setRawData] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    const [total, setTotal] = useState(0);

    useEffect(() => {

        if (!dates.length) {
            setRawData([]);
            return;
        }

        setLoading(true);

        fetchTableData(dates, page)
            .then((res) => {

                setRawData(res.results);

                setTotal(res.count);
            })
            .finally(() => setLoading(false));

    }, [dates, page]);

    const normalizedData = useMemo(() => {
        return normalizeData(rawData);
    }, [rawData]);

    return {
        data: normalizedData,
        loading,
        total,
    };
};