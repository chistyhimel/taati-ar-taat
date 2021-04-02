import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import { MenubarContainer, MenubarSocilMediaIcons } from "./Menubar.style";
import SubMenu from "./SubMenu.component";

const Menubar = ({ mobileMenubarState }) => {
  const history = useHistory();
  const [mobileMenubar, setMobileMenubar] = mobileMenubarState;

  const [openSubMenu, setOpenSubMenu] = useState(false);

  let menubarRef = useClickOutside(() => {
    setMobileMenubar(false);
  });

  console.log(openSubMenu);
  return (
    <>
      <MenubarContainer mobileMenubar={mobileMenubar} ref={menubarRef}>
        <h1 onClick={() => setMobileMenubar(false)}>✕</h1>
        <p onClick={() => history.push("/")}>Home</p>

        <p onClick={() => setOpenSubMenu(!openSubMenu)}>Shop</p>
        <SubMenu openSubMenu={openSubMenu} />

        <p onClick={() => history.push("/about-us")}>About Us</p>
        <p onClick={() => history.push("/contact-us")}>Contact Us</p>
        <p onClick={() => history.push("/sign-in")}>Account</p>
        <MenubarSocilMediaIcons>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
        </MenubarSocilMediaIcons>
      </MenubarContainer>
    </>
  );
};

export default Menubar;