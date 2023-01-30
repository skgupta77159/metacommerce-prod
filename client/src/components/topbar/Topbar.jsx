import "./topbar.css";
import { NavLink } from "react-router-dom";
import UserIcon from "../../static/svg/UserIcon";
import CartIcon from "../../static/svg/CartIcon";
import MoreIcon from "../../static/svg/MoreIcon";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { logout_admin } from "../../service/adminApi";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import SearchIcon from "../../static/svg/SearchIcon";

export default function Topbar() {

    const { user, userAuth, adminAuth, dispatch } = useContext(AppContext)
    const {setProductName, searchProduct} = useContext(SearchContext)
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    return (
        <div className="topbarWrapper">
            <NavLink exact to="/" className="nav-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png" /></NavLink>

            <ul className="topbarList">
                {
                    !userAuth ?
                        <div class="dropdown-menu">
                            <div className="dropdown-flex">
                                <div class="menu-btn"><MoreIcon /></div>

                                <div class="menu-content">
                                </div>
                            </div>
                        </div> 
                    : null
                }
            </ul>
        </div>
    );
}