import { Line } from '@ant-design/plots';
import React from 'react';
import { Card, Statistic, Typography, Row, Col, } from 'antd';

const { Title } = Typography;


const data = [
  { tháng: 'Một', type: 'Số phòng đặt', value: 200 },
  { tháng: 'Một', type: 'Số phòng trống', value: 50 },
  { tháng: 'Hai', type: 'Số phòng đặt', value: 190 },
  { tháng: 'Hai', type: 'Số phòng trống', value: 60 },
  { tháng: 'Ba', type: 'Số phòng đặt', value: 215 },
  { tháng: 'Ba', type: 'Số phòng trống', value: 35 },
  { tháng: 'Bốn', type: 'Số phòng đặt', value: 210 },
  { tháng: 'Bốn', type: 'Số phòng trống', value: 40 },
  { tháng: 'Năm', type: 'Số phòng đặt', value: 180 },
  { tháng: 'Năm', type: 'Số phòng trống', value: 70 },
  { tháng: 'Sáu', type: 'Số phòng đặt', value: 220 },
  { tháng: 'Sáu', type: 'Số phòng trống', value: 30 },
]

const config = {
  data,
  xField: 'tháng',
  yField: 'value',
  seriesField: 'type',
  yAxis: {
    label: {
      formatter: (v) => `${v} Số phòng đặt`,
    },
  },
  tooltip: {
    shared: true,
    showMarkers: true,
  },
  legend: {
    position: 'top',
  },
  smooth: true,
  animation: {
    appear: {
      animation: 'path-in',
      duration: 5000,
    },
  },
};

const GeneralManagerDashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Quản lý chung</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Card>
            <Statistic title="Số phòng" value={250} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Card>
            <Statistic title="Số phòng trống" value={75} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Card>
            <Statistic title="Nhân viên" value={150} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Card>
            <Statistic title="Doanh thu" value={245000} prefix="$" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Card>
            <Statistic title="Khách hàng" value={170} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={18} lg={16}>
        </Col>
      </Row>
      <div className="chart__title" style={{
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "400",
        padding: "20px 0px",
        paddingBottom: "50px",
      }}>
        Xu hướng đặt phòng 6 tháng gần đây
      </div>
      <Line {...config} />
    </div>
  );
};

export default GeneralManagerDashboard;
