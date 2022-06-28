import React, { Fragment } from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
