import React, { useState } from "react";
import { Badge, Card, List } from "antd";
import { Text } from "@/components/text";
import { CalendarOutlined } from "@ant-design/icons";
import UpcomingEventsSkeleton from "@/components/skeleton/upcoming-events";
import { getDate } from "@/utilities/helpers";

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card
      style={{ height: "100%" }}
      headStyle={{ padding: "8px 16px" }}
      bodyStyle={{ padding: "0 1rem" }}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CalendarOutlined />
          <Text
            size="sm"
            style={{
              marginLeft: "0.7rem",
            }}
          >
            Upcoming Events
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, index) => ({
            id: index,
            title: "Event",
          }))}
          renderItem={() => <UpcomingEventsSkeleton />}
        />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={[]}
          renderItem={(item) => {
            const renderDate = getDate(item.startDate, item.endDate);
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge color={item.color} />}
                  title={<Text size="xs">{renderDate}</Text>}
                  description={
                    <Text ellipsis={{ tooltip: true }} strong>
                      {item.title}
                    </Text>
                  }
                />
              </List.Item>
            );
          }}
        ></List>
      )}
    </Card>
  );
};
export default UpcomingEvents;
