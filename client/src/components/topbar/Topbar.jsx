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
import { logout_user } from "../../service/userApi";

export default function Topbar() {

    const { user, userAuth, adminAuth, dispatch } = useContext(AppContext)
    const { setProductName, searchProduct } = useContext(SearchContext)
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const user_logout = (e) => {
        e.preventDefault()
        logout_user()
        window.location.reload();
    }

    return (
        <div className="topbarWrapper">
            <NavLink exact to="/" className="nav-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png" /></NavLink>

            <ul className="topbarList">
                <>
                    <li className="nav-item">
                        <NavLink to="user/cart" className="nav-link"><CartIcon /></NavLink>
                        {user && user.cartItem.length > 0 ? <div className="cartBadge"><span>{user.cartItem.length}</span></div> : null}
                    </li>
                    <li className="nav-item">
                        <NavLink to="user/profile" className="nav-link"><UserIcon /></NavLink>
                    </li>
                </>
                {
                    userAuth ?
                        <div class="dropdown-menu">
                            <div className="dropdown-flex">
                                <div class="menu-btn"><MoreIcon /></div>
                                <div class="menu-content">
                                    {userAuth ?
                                        <>
                                            <NavLink exact className="links-hidden" to='/user/orders'>Orders</NavLink>
                                            <span className="links-hidden" onClick={user_logout}>Logout</span>
                                        </>
                                        :
                                        null}

                                </div>
                            </div>
                        </div>
                        : null
                }
            </ul>
        </div>
    );
}