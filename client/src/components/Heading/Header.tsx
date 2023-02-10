import {
    faBell,
    faCaretDown,
  faCircleInfo,
  faGear,
  faMessage,
  faRightFromBracket,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import DropdownItem from "../DropdownItem/DropdownItem";
import DropdownItemUserInfo from "../DropdownItemUserInfo/DropdownItemUserInfo";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Navbar from "../Navbar/Navbar";
import NavItem from "../NavItem/NavItem";
import NavItems from "../NavItems/NavItems";
import Search from "../Search/Search";

interface IMenuItemType {
  type: string;
  icon: IconDefinition;
  url: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken, removeToken] = useCookies(["access-token"]);
  const cookieToken = token["access-token"] || undefined;
  const logout = () => {
    removeToken("access-token");
    navigate("/login");
  };

  const menuItems: IMenuItemType[] = [
    {
      type: "Settings",
      icon: faGear,
      url: "",
    },
    { type: "Help", icon: faCircleInfo, url: "" },
    {
      type: "Logout",
      icon: faRightFromBracket,
      url: "",
      onClick: logout,
    },
  ];

  return (
    <Navbar>
      <div style={{ color: "white", fontWeight: "bold" }}>LamaSocial</div>
      <Search />
      <NavItems>
        <NavItem icon={faBell} title="Notifications">
          <DropdownMenu>
            <p>Notifications</p>
          </DropdownMenu>
        </NavItem>
        <NavItem icon={faMessage} title="Messages">
          <DropdownMenu>
            <DropdownItem></DropdownItem>
            <DropdownItem></DropdownItem>
            <DropdownItem></DropdownItem>
            <DropdownItem></DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem icon={faCaretDown} title="Menu">
          <DropdownMenu>
            <DropdownItemUserInfo
              imageUrl="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-1/307840742_5590371681025446_113209348334201931_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEoN3cSXjMWVPRd04qFQ6seVDiRpsFMQ1ZUOJGmwUxDVmE8hDWjua2qN6gberuAixBtSiqH3jDgeAvjK3ZP8xuD&_nc_ohc=AV9yFP3-3LYAX9sarEm&tn=n3O6v_yY3uAmZKrx&_nc_ht=scontent-otp1-1.xx&oh=00_AfAaMQVmIVFOoB1AtuVZ8uDc3QOUA6ETUIBu4zA1lKzNeA&oe=63E8384A"
              name="Morohoshi Daniel-Iosif"
            />
            <>
              {menuItems.map((item, id) => (
                <DropdownItem
                  key={id}
                  onClick={item.onClick}
                  title={item.type}
                  icon={item.icon}
                />
              ))}
            </>
          </DropdownMenu>
        </NavItem>
      </NavItems>
    </Navbar>
  );
};

export default Header;
