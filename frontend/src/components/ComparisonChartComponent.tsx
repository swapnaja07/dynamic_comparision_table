import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';

interface Props {
    data: any[];
    dates: string[];
}

const ComparisonChartComponent = ({
    data,
    dates,
}: Props) => {

    return (
        <div
            style={{
                marginTop: 40,
                background: '#fff',
                padding: 24,
                borderRadius: 8,
            }}
        >
            <h2
                style={{
                    marginBottom: 20,
                }}
            >
                Product Comparison Chart
            </h2>

            <ResponsiveContainer
                width="100%"
                height={450}
            >
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 80,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="product"
                        angle={-30}
                        textAnchor="end"
                        interval={0}
                    />

                    <YAxis />

                    <Tooltip />

                    <Legend verticalAlign="top" height={36} />

                    {dates.map((date, index) => (
                        <Bar
                            key={date}
                            dataKey={date}
                            stackId="comparison"
                            fill={
                                index === 0
                                    ? '#001529'
                                    : '#1677ff'
                            }
                            radius={[4, 4, 0, 0]}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ComparisonChartComponent;