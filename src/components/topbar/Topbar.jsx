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
import { PageContext } from "../../context/PageContext";

export default function Topbar() {

    const { user, userAuth, adminAuth, dispatch } = useContext(AppContext)
    const { setProductName, searchProduct } = useContext(SearchContext)
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const {setPage} = useContext(PageContext);

    const user_logout = (e) => {
        e.preventDefault()
        logout_user()
        window.location.reload();
    }

    return (
        <div className="topbarWrapper">
            <div onClick={()=> setPage("home")} className="nav-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png" /></div>

            <ul className="topbarList">
                <>
                    <li className="nav-item" onClick={()=> setPage("cart")}>
                        <div className="nav-link"><CartIcon /></div>
                        {user && user.cartItem.length > 0 ? <div className="cartBadge"><span>{user.cartItem.length}</span></div> : null}
                    </li>
                    <li className="nav-item" onClick={() => setPage("profile")}>
                        <div className="nav-link" ><UserIcon /></div>
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
                                            <div className="links-hidden" onClick={() => setPage("orders")}>Orders</div>
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