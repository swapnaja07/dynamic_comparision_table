import { DatePicker, Space, Switch } from 'antd';

const { RangePicker } = DatePicker;

interface Props {
    compareMode: boolean;
    setCompareMode: (value: boolean) => void;
    dates: string[];
    setDates: (dates: string[]) => void;
}

const FilterComponent = ({
    compareMode,
    setCompareMode,
    dates,
    setDates,
}: Props) => {
    return (
        <Space style={{ marginBottom: 20 }}>
            {!compareMode ? (
                <DatePicker
                    onChange={(date, dateString) => {
                        setDates(dateString ? [dateString] : []);
                    }}
                />
            ) : (
                <RangePicker
                    onChange={(_, dateStrings) => {
                        const filtered = dateStrings.filter(Boolean);
                        setDates(filtered);
                    }}
                />
            )}

            <Switch
                checked={compareMode}
                onChange={(checked) => {
                    setCompareMode(checked);

                    if (!checked && dates.length > 1) {
                        setDates([dates[0]]);
                    }
                }}
            />
        </Space>
    );
};

export default FilterComponent;