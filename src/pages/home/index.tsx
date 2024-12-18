import { Col, Row } from "antd";
import UpcomingEvents from "@/components/home/upcoming-events";
import DealChart from "@/components/home/deal-chart";

export const Home = () => {
  return (
    <div>
      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col xs={24} sm={24} xl={8} style={{ height: "460px" }}>
          <UpcomingEvents />
        </Col>
        <Col xs={24} sm={24} xl={8} style={{ height: "460px" }}>
          <DealChart />
        </Col>
      </Row>
    </div>
  );
};
