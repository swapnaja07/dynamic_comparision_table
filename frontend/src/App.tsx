import { useState, useMemo } from 'react';
import { Layout, Typography } from 'antd';

import Filters from './components/FilterComponent';
import ComparisonTable from './components/ComparisonTableComponent';
import ComparisonChartComponent from './components/ComparisonChartComponent'

import { useTableData } from './hooks/useTableData';

const { Header, Content } = Layout;

function App() {
  const [compareMode, setCompareMode] = useState(false);

  const [dates, setDates] = useState<string[]>([]);

  const [page, setPage] = useState(1);

  const uniqueDates = useMemo(() => {
    return dates.length === 2 && dates[0] === dates[1]
      ? [dates[0]]
      : dates;
  }, [dates]);

  const { data, loading, total } =
    useTableData(uniqueDates, page);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Dynamic Comparison Table
      </Header>

      <Content style={{ padding: 24 }}>
        <Typography.Title level={3}>
          Product Comparison Dashboard
        </Typography.Title>

        <Filters
          compareMode={compareMode}
          setCompareMode={setCompareMode}
          dates={dates}
          setDates={(newDates) => {
            setDates(newDates);

            setPage(1);
          }}
        />

        <ComparisonTable
          data={data}
          dates={uniqueDates}
          loading={loading}
          total={total}
          page={page}
          setPage={setPage}
        />
        {uniqueDates.length > 0 && data.length > 0 && (
          <ComparisonChartComponent
            data={data}
            dates={uniqueDates}
          />
        )}
      </Content>
    </Layout>
  );
}

export default App;