import { Table, Empty, Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

interface Props {
    data: any[];
    dates: string[];
    loading: boolean;
    total: number;
    page: number;
    setPage: (page: number) => void;
}

const ComparisonTableComponent = ({
    data,
    dates,
    loading,
    total,
    page,
    setPage,
}: Props) => {

    const columns = useMemo(() => {
        const cols: any[] = [
            {
                title: 'Product',
                dataIndex: 'product',
                width: 200,
                align: 'center',
            },
            {
                title: 'Region',
                dataIndex: 'region',
                width: 200,
                align: 'center',
            },
        ];

        dates.forEach((date) => {
            cols.push({
                title: `Value (${date})`,
                dataIndex: date,
                width: 250,
                align: 'center',
                sorter: (a: any, b: any) =>
                    (a[date] || 0) - (b[date] || 0),
            });
        });

        return cols;
    }, [dates]);

    const exportToCSV = () => {
        if (!data.length) return;

        const headers = columns.map((col: any) => col.title);

        const rows = data.map((row: any) =>
            columns.map((col: any) => row[col.dataIndex] ?? '')
        );

        const csvContent = [
            headers.join(','),
            ...rows.map((row: any) => row.join(',')),
        ].join('\n');

        const blob = new Blob([csvContent], {
            type: 'text/csv;charset=utf-8;',
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');

        link.href = url;
        link.download = 'comparison-table.csv';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };

    if (!data.length && !loading) {
        return <Empty description="No data available" />;
    }

    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    onClick={exportToCSV}
                    style={{
                        backgroundColor: '#001529',
                        borderColor: '#001529',
                    }}
                >
                    Export CSV
                </Button>
            </Space>

            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                rowKey="key"
                pagination={{
                    current: page,
                    total: total,
                    pageSize: 20,
                    showSizeChanger: false,
                    onChange: (page) => setPage(page),
                }}
                scroll={{
                    y: 600,
                    x: 1000,
                }}
                virtual
            />
        </>
    );
};

export default ComparisonTableComponent;