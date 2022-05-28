import { Link } from "react-router-dom"
import React  from "react"

export default function Navbar(){
    return(

            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="in">
                            <li className="sidebar-item selected"> <Link className="sidebar-link waves-effect waves-dark sidebar-link active" to="/" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Dashboard</span></Link ></li>
                            <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/post" aria-expanded="false"><i className="mdi mdi-file"></i><span className="hide-menu">Post</span></Link ></li>
                            <li className="sidebar-item"> <p className="sidebar-link waves-effect waves-dark sidebar-link"  aria-expanded="false"><i className="mdi mdi-account-network"></i><span className="hide-menu">Profile</span></p ></li>
                            <li className="sidebar-item"> <p className="sidebar-link waves-effect waves-dark sidebar-link"  aria-expanded="false"><i className="mdi mdi-border-all"></i><span className="hide-menu">Table</span></p ></li>
                            <li className="sidebar-item"> <p className="sidebar-link waves-effect waves-dark sidebar-link"  aria-expanded="false"><i className="mdi mdi-face"></i><span className="hide-menu">Icon</span></p ></li>
                            <li className="sidebar-item"> <p className="sidebar-link waves-effect waves-dark sidebar-link"  aria-expanded="false"><i className="mdi mdi-alert-outline"></i><span className="hide-menu">404</span></p ></li>               
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }


     