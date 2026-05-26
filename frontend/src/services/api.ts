
export const fetchTableData = async (
    dates: string[],
    page: number = 1
) => {
    const query = dates.join(',');

    const response = await fetch(
        `http://127.0.0.1:8000/api/table-data/?dates=${query}&page=${page}`
    );

    return response.json();
};