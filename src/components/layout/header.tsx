import CurrentUser from "./current-user";
import { Layout, Space } from "antd";

const Header = () => {
  return (
    <Layout.Header
      style={{
        background: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Space align={"center"} size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
