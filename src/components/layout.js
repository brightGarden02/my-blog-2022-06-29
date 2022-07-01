import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} || {data.site.siteMetadata.title}
      </title>

      <header className={siteTitle}>{data.site.siteMetadata.title}</header>

      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navLinkItem} to="/about">
              about
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

      <div>Copyright All rights</div>
    </div>
  );
}

export default Layout;
