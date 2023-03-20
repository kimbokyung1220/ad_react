import { TableColumnsType } from "antd";
import { adGroupItem } from "../../../../../type/adGroup";

export const columns: TableColumnsType<adGroupItem> = [
    { title: '상품번호', dataIndex: 'index', key: 'index', align: 'center', render: (key: React.Key) => (key) },
    { title: '그룹명', dataIndex: 'agroupName', key: 'agroupName', align: 'center' },
    { title: '그룹 ON/OFF', dataIndex: 'agroupUseConfigYnSrt', key: 'agroupUseConfigYnSrt', align: 'center' },
    { title: '상품 수(LIVE/전체)', dataIndex: 'itemCnt', key: 'itemCnt', align: 'center' },

];

export const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: adGroupItem[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: adGroupItem) => ({
        disabled: record.agroupName === 'Disabled User', // Column configuration not to be checked
        name: record.agroupName,
    }),
};