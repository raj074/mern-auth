import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRefreshHome = () => {
    window.scrollTo({top: 0})
  };

  return (
    <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <div className="container-fluid">
          <Link to="/" className="logo" onClick={handleRefreshHome}>
            <h1 className="navbar-brand text-uppercase p-0 m-0">R</h1>
          </Link>

     

          <Menu />
         
        </div>
      </nav>
    </div>
  );
};

export default Header;
