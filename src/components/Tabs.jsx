import { Tabs } from "antd";
import {
    HomeOutlined,
    AppstoreOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import icon from "../assets/build.png";
import log from "../assets/log.png";
import check from "../assets/checkfil.png";
import user from "../assets/user.png";
import inbox from "../assets/inbox.png";
import home from "../assets/home.png";


const items = [
    {
        key: "/",

        icon: <img src={home} />,
        children: "",
    },
    {
        key: "residence",

        icon: <img src={icon} />,
        children: "",
    },
    {
        key: "reservation",

        icon: <img src={check} />,
        children: "",
    },
    {
        key: "remboursement",

        icon: <img src={check} />,
        children: "",
    },
    {
        key: "newsletter",

        icon: <img src={inbox} />,
        children: "",
    },
    {
        key: "profil",

        icon: <img src={user} />,
        children: "",
    },
    {
        key: "login",

        icon: <img src={log} />,
        children: "",
    },
];
const TabsComponent = () => {
    const navigate = useNavigate();
    const onChange = (key) => {
        navigate(key);
    };
    const location = useLocation();

    const activeKeyFromUrl = location.pathname.replace("/", "") || "/";
    return (
        <Tabs
            defaultActiveKey={activeKeyFromUrl}
            onChange={onChange}
            centered
            tabPosition="bottom"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                backgroundColor: "#fff",
            }}
        >
            {items.map((item) => (
                <Tabs.TabPane
                    tab={
                        <span>
                            {item.icon}
                            {item.label}
                        </span>
                    }
                    key={item.key}
                >
                    {item.children}
                </Tabs.TabPane>
            ))}
        </Tabs>
    );
};

export default TabsComponent;
