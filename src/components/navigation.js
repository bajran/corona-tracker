import React, { useState } from "react";
import { useDispatchContext, useStateContext } from "../covid-provider";
import { SIDEBAR } from "../hooks-reducer/actionTypes";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { FaSearch } from "react-icons/fa";

const NavigationMenu = ({showSearchIcon = true}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatchContext();
  const { showSidebar } = useStateContext();

  const toggle = () => {
    dispatch({ type: SIDEBAR, payload: false });
    setIsOpen(!isOpen);
  };
  const setSidebar = () => {
    if(isOpen){
      setIsOpen(false)
    }
    dispatch({ type: SIDEBAR, payload: !showSidebar });
  };

  return (
    <Navbar expand="md" light className="navbar-bg-black">
      { showSearchIcon ?
        <span onClick={setSidebar} className="cp navbar-header-text show-search">
          <FaSearch size={23} />
        </span> : <span className="cp navbar-header-text show-search"></span>
      }
      <Link to="/" className="link">
        <h6 className="main-nav navbar-header-text">GO-Corona<sup className="beta-version">Beta</sup></h6>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="show-right-end">
        <Nav className="mr-auto" navbar>
          <NavItem className="side-space">
            <Link to="/precaution" className="link">
              <h6 className="navbar-header-text  cp">Precautions</h6>
            </Link>
          </NavItem>
          <NavItem className="side-space">
            <Link to="/about" className="link">
              <h6 className="navbar-header-text  cp">About</h6>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationMenu;
