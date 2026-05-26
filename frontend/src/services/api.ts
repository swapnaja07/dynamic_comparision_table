
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTableData = async (dates: string[], page = 1) => {
    const query = dates.join(',');

    const response = await fetch(
        `${BASE_URL}/api/table-data/?dates=${query}&page=${page}`
    );

    return response.json();
};