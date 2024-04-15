"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";
import { ROUTES } from "@/shared/routes/routes";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";

const Navbar = ({ lr }) => {
  const navbar = useRef();

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar.current.classList.add("nav-scroll");
    } else {
      navbar.current.classList.remove("nav-scroll");
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const servicesRoute = useRouterHelper().getOneRoute("Services");

  return (
    <nav ref={navbar} className={`navbar navbar-expand-lg change`}>
      <div className="container">
        <Link className="logo" href="/">
          <img ref={lr} src={appData.darkLogo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {ROUTES.slice(1).map((route, index) => (
              <li className="nav-item" key={index}>
                <Link href={route.path} className="nav-link">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
