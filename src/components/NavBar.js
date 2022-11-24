import React from "react";

export default function NavBar() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-container">
          <img
            className="amazon-logo hove"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
          <span className="hove">
            <i className="fas fa-solid fa-location-dot"></i>
            <a href="/" className="anchor">
              Hello <br />
              <b>Select your address</b>
            </a>
          </span>
          <div className="header-search">
            <input className="search-input" type="text" />
            <button className="search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="header-cart">
            <span className="hove">
              <i className="fas fa-globe fa-color"></i>
              EN <i className="fas fa-caret-down"></i>
            </span>

            <span className="hove">
              <a href="/" className="anchor">
                Hello, Sign in <br />
                <b>Account & Lists</b> <i className="fas fa-caret-down"></i>
              </a>
            </span>

            <span className="hove">
              Returns
              <b>& Orders</b>
            </span>

            <span className="hove">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
