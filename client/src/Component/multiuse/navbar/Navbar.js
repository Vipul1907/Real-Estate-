import React, { Component } from "react";
import "../multiuse.css";
import { MenuProduct, MenuTwo } from "../menu-items/Menuproduct";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ProfileTwo from "../../assests/Ellipse 2.svg";
// import PostMain from "../../PostProperty.js/PostMain";
// import Register from "../../login/Registretion/Register";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="nav">
        <nav className="NavbarItem">
          <div className="logose flex items-center">
            <img className="rounded-full w-14 h-14" src={ProfileTwo} alt="my" />
            <h1 className="navbar-logo">
              <a href="/">MySpace India</a>
            </h1>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuProduct.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-btn flex items-center gap-4">
            <a
              href="/register"
              className="login flex items-center justify-center text-base not-italic font-semibold"
            >
              Signup / Login
            </a>
            <Link to="/postMian">
              <button className="btn" id="btn">
                Post Properties
              </button>
            </Link>
            <button
              type="button"
              className="rounded-fully flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropmenu"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <FaUser id="nav_icon_user" />
            </button>
            <div className="dropdowns hidden" id="user-dropmenu">
              <div className="down">
                <div className="nav-menu-bar">
                  {MenuTwo.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        <Link className={item.cName} to={item.url}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </div>
                <ul className="text-whir color-black">
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="./register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      id="login"
                    >
                      Signup / Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

// import React, { Component } from "react";
// import "../multiuse.css";
// import { MenuProduct, MenuTwo } from "../menu-items/Menuproduct";
// import { Link } from "react-router-dom";
// import Profile from "../../assests/user-3-fill.svg";
// import ProfileTwo from "../../assests/Ellipse 2.svg";
// // import Register from "../../login/Registretion/Register";

// class Navbar extends Component {
//   state = { clicked: false };
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
//   render() {
//     return (
//       <div className="nav">
//         <nav className="NavbarItem">
//           <div className="logose flex items-center">
//             <img className="rounded-full w-14 h-14" src={ProfileTwo} alt="my" />
//             <h1 className="navbar-logo">MySpace India</h1>
//           </div>
//           <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//             {MenuProduct.map((item, index) => {
//               return (
//                 <li key={index}>
//                   <Link className={item.cName} to={item.url}>
//                     {item.title}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//           <div className="nav-btn flex items-center gap-4">
//             <a
//               href="/register"
//               className="login flex items-center justify-center text-base not-italic font-semibold"
//             >
//               Signup / Login
//             </a>
//             <button className="btn" id="btn">
//               Post Properties
//             </button>
//             <button
//               type="button"
//               className="rounded-fully flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//               id="user-menu-button"
//               aria-expanded="false"
//               data-dropdown-toggle="user-dropmenu"
//               data-dropdown-placement="bottom"
//             >
//               <span className="sr-only">Open user menu</span>
//               <img className="rounded-full" src={Profile} alt="my" />
//             </button>
//             <div className="dropdowns hidden" id="user-dropmenu">
//               <div className="down">
//                 <div>
//                   {MenuTwo.map((item, index) => {
//                     return (
//                       <li
//                         key={index}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                       >
//                         <Link className={item.cName} to={item.url}>
//                           {item.title}
//                         </Link>
//                       </li>
//                     );
//                   })}
//                 </div>
//                 <ul className="text-whir color-black">
//                   <li>
//                     <a
//                       href="/"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Dashboard
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Settings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Earnings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="./register"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                       id="login"
//                     >
//                       Signup / Login
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Sign out
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;
