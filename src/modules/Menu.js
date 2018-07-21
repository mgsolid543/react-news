import React from "react";
import { Menu } from "semantic-ui-react";

const items = [
  { key: "Home", active: true, name: "Home" },
  { key: "About", name: "About" },
  { key: "Topics", name: "Topics" }
];

const MenuExampleProps = () => <Menu items={items} />;

export default MenuExampleProps;
