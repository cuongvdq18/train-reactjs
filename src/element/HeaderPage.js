import { Link } from "react-router-dom"
import React  from "react"


export default function HeaderPage(){
    return(
        <header className="topbar" data-navbarbg="skin6">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
            <div className="navbar-header" data-logobg="skin6">
                <p className="navbar-brand">
                    <b className="logo-icon">
                        <img src="../assets/images/DAILY-MINIMAL.jfif" width={31} height={31} alt="homepage" className="dark-logo" />
                    </b>
                    <span className="logo-text">
                        <img src="../assets/images/logo-text.png" height={19} alt="homepage" className="dark-logo" />
  
                    </span>
                </p>
                <a className="nav-toggler waves-effect waves-light d-block d-md-none"  ><i
                        className="mdi mdi-menu"></i></a>
            </div>
            <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                <ul className="navbar-nav float-start me-auto">
                    <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark"
                             ><i className="mdi mdi-magnify me-1"></i> <span className="font-16">Search</span></a>
                        <form className="app-search position-absolute">
                            <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a
                                className="srh-btn"><i className="mdi mdi-window-close"></i></a>
                        </form>
                    </li>
                </ul>
                <ul className="navbar-nav float-end">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/images/users/1.jpg" alt="user" className="rounded-circle" width="51"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item"  ><i className="ti-user m-r-5 m-l-5"></i>
                            &nbsp;&nbsp;My Profile</a>
                            <a className="dropdown-item"  ><i className="ti-wallet m-r-5 m-l-5"></i>
                            &nbsp;&nbsp;My Balance</a>
                            <a className="dropdown-item"  ><i className="ti-email m-r-5 m-l-5"></i>
                            &nbsp;&nbsp;Inbox</a>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
                )
            }
        