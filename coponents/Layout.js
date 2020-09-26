const { default: Link } = require("next/link");
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout__nav">
        <Link href="/">
          <a>
            <span>Hacker Next</span>
          </a>
        </Link>
      </div>
      <div className="Layout__children"> {children} </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
        body {
          font-family: "Roboto", sans-serif;
          background-color: white;
        }
      `}</style>
      <style jsx>{`
        .Layout {
          width: 60%;
          margin-left: auto;
          margin-right: auto;
          background-color: #d6e0f0;
          font-family: ;
          border-radius: 1em;
        }

        .Layout__nav {
          background-color: #30475e;
          border-radius: 0.5em;
        }
        .Layout__nav a {
          text-decoration: none;
          font-size: 4rem;
          color: white;
          padding: 0.5em;
        }
        .Layout__children {
          padding-left: 2em;
        }
      `}</style>
    </div>
  );
};

export default Layout;
