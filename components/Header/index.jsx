import React from "react";
import { Container } from "reactstrap";
import Link from "next/link";

import classes from "./styles.module.css";

const NAV_LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          <div className={`${classes.logo}`}>
            <h1>
              <span>S</span>hankhadeep
            </h1>
          </div>
          <div className={`${classes.navigation}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV_LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
              <div className={`${classes.nav_right}`}>
                <p className="d-flex align-items-center gap-3 mb-0">
                  <i className="ri-phone-line"></i> +918240355085
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
