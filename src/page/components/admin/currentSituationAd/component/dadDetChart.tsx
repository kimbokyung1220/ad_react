import { useState, useRef, useEffect } from 'react';
import ReactEcharts, { EChartsReactProps } from 'echarts-for-react';
import { useSelector } from 'react-redux';
import { State } from '../../../../../state';
import { Select } from 'antd';
import { warningAlert } from '../../../../alerts/alert';

const DadDetChart = () => {
    const dadRptDetails = useSelector((state: State) => state.dadRptDetail);

    // select-box 데이터를 관리하는 state
    const [selectedDefault1, setSelectedDefault1] = useState<string>("노출수");
    const [selectedDefault2, setSelectedDefault2] = useState<string>("클릭수");
    //chart의 터이터값을 관리하는 state
    const [seriesData1, setSeriesData1] = useState<number[]>([]);
    const [seriesData2, setSeriesData2] = useState<number[]>([]);
    //chart의 yAxis
    let minValue1 = Math.min(...seriesData1);
    let maxValue1 = Math.max(...seriesData1);
    let minValue2 = Math.min(...seriesData2);
    let maxValue2 = Math.max(...seriesData2);


    const xData: string[] = [];

    dadRptDetails.forEach((data, index) => {
        if (index !== dadRptDetails.length - 1) {
            xData.push(data.basicDate);
        }
    });
    // select-box(1) Event
    const onSelectedEvent1 = (value: string) => {
        if (value === selectedDefault2) {
            warningAlert("두번째 옵션과 같은값 입니다.");
            return false;
        }
        setSelectedDefault1(value);
    };

    // select-box(2) Event
    const onSelectedEvent2 = (value: string) => {
        if (value === selectedDefault1) {
            warningAlert("첫번째 옵션과 같은값 입니다.");
            return false;
        }
        setSelectedDefault2(value);
    };

    useEffect(() => {
        // 차트 데이터값이 변경 될 때 사용되는 const
        const newSeriesData1: number[] = [];
        const newSeriesData2: number[] = [];

        dadRptDetails.forEach((data, index) => {
            if (index !== dadRptDetails.length - 1) {
                xData.push(data.basicDate);

                // SELECT-BOX(1)
                if (selectedDefault1 === "노출수") newSeriesData1.push(data.impCnt);
                if (selectedDefault1 === "클릭수") newSeriesData1.push(data.clickCnt);
                if (selectedDefault1 === "평균노출순위") newSeriesData1.push(data.avgImpRank);
                if (selectedDefault1 === "평균클릭비용") newSeriesData1.push(data.avgCpc);
                if (selectedDefault1 === "광고비") newSeriesData1.push(data.adSpend);
                if (selectedDefault1 === "클릭률") newSeriesData1.push(data.clickPercent);

                // SELECT-BOX(2)
                if (selectedDefault2 === "노출수") newSeriesData2.push(data.impCnt);
                if (selectedDefault2 === "클릭수") newSeriesData2.push(data.clickCnt);
                if (selectedDefault2 === "평균노출순위") newSeriesData2.push(data.avgImpRank);
                if (selectedDefault2 === "평균클릭비용") newSeriesData2.push(data.avgCpc);
                if (selectedDefault2 === "광고비") newSeriesData2.push(data.adSpend);
                if (selectedDefault2 === "클릭률") newSeriesData2.push(data.clickPercent);
            }
        });
        setSeriesData1(newSeriesData1);
        setSeriesData2(newSeriesData2);

    }, [dadRptDetails, selectedDefault1, selectedDefault2]);

    // EChart옵션
    const options = {
        title: {
            text: 'Stacked Line Chart'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            //data: ['Line 1', 'Line 2'],
            data: [selectedDefault1, selectedDefault2],
            bottom: '10'
        },
        xAxis: {
            type: 'category',
            data: xData
        },
        yAxis: [
            {
              type: 'value',
              position: 'left',
              name: selectedDefault1, // y축 제목
              dataMin: minValue1,
              dataMax: maxValue1
            },
            {
              type: 'value',
              position: 'right',
              name: selectedDefault2, // y축 제목
              dataMin: minValue2 ,
              dataMax: maxValue2
            }
          ],
        series: [
            {
                name: selectedDefault1,
                type: 'line',
                stack: 'stacked',
                data: seriesData1,
                yAxisIndex: 0 // 첫 번째 y축 사용
            },
            {
                name: selectedDefault2,
                type: 'line',
                stack: 'stacked',
                data: seriesData2,
                yAxisIndex: 1  // 두 번째 y축 사용
            }
        ]
    };

    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        {/* <h2 className="fz-24 fc-gray-700"> 제목 </h2> */}
                    </div>
                    <div className="box-right">
                        <Select
                            style={{ width: "250px" }}
                            placeholder="반려사유를 선택해주세요"
                            onChange={onSelectedEvent1}
                            value={selectedDefault1}
                            options={[
                                { value: "노출수", label: "노출수" },
                                { value: "클릭수", label: "클릭수" },
                                { value: "평균노출순위", label: "평균 노출 순위" },
                                { value: "평균클릭비용", label: "평균 클릭 비용" },
                                { value: "광고비", label: "광고비" },
                                { value: "클릭률", label: "클릭률" },
                            ]}
                        >
                        </Select>
                        <Select
                            style={{ width: "250px" }}
                            placeholder="반려사유를 선택해주세요"
                            onChange={onSelectedEvent2}
                            value={selectedDefault2}
                            options={[
                                { value: "노출수", label: "노출수" },
                                { value: "클릭수", label: "클릭수" },
                                { value: "평균노출순위", label: "평균 노출 순위" },
                                { value: "평균클릭비용", label: "평균 클릭 비용" },
                                { value: "광고비", label: "광고비" },
                                { value: "클릭률", label: "클릭률" },
                            ]}
                        >
                        </Select>
                    </div>
                </div>

                <div className="box-body">

                    <ReactEcharts option={options} />
                </div>
            </section>
        </>
    );
};


export default DadDetChart;