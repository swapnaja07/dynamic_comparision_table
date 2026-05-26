export const normalizeData = (data: any[]) => {
    const map: any = {};

    data.forEach((item) => {
        const key = `${item.product}-${item.region}`;

        if (!map[key]) {
            map[key] = {
                key,
                product: item.product,
                region: item.region,
            };
        }

        map[key][item.date] = item.value;
    });

    return Object.values(map);
};