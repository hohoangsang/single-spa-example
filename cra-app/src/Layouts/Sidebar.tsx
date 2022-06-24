import {
  FlagOutlined,
  InsertRowBelowOutlined,
  InsuranceOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { rootPathApp } from "../common/common";
import "./sidebar.css";

const menuSidebar = [
  {
    title: "About",
    path: "about",
    icon: <FlagOutlined />,
  },
  {
    title: "Contact",
    path: "contact",
    icon: <PhoneOutlined />,
  },
  {
    title: "Product",
    path: "product",
    icon: <InsertRowBelowOutlined />,
  },
  {
    title: "Policy",
    path: "policy",
    icon: <InsuranceOutlined />,
  },
];

function Sidebar() {
  const navigate = useNavigate();

  const [selectItem, setSelectItem] = useState<number>();

  return (
    <div className="sidebar__container">
      <ul className="sidebar__menu">
        {menuSidebar.length
          ? menuSidebar.map((item: any, index: number) => (
              <li
                key={index}
                className={`sidebar__item ${
                  index === selectItem ? "active" : null
                }`}
                onClick={() => {
                  navigate(`${rootPathApp}/${item.path}`);
                  setSelectItem(index);
                }}
              >
                <div>{item.icon}</div> <p>{item.title}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Sidebar;
