import "./user_dashboard.css"
import { AppContext } from "../../context/AppContext"
import { useContext } from "react"

export default function UserProfile() {

    const { user } = useContext(AppContext)
    return (
        <div className="userProfile">
            {
                user ? <>
                    <div className="userProfileDiv">
                        <div id="closeBtn">
                            <button>
                                X
                            </button>
                        </div>
                        <div className="personalInfo">
                            <div className="userDashRightTop">
                                <h2>Profile</h2>
                            </div>
                            <h3>Personal Details</h3>
                            <div className="infoDiv">
                                <div className="infoProp">
                                    <p>Name</p>
                                    <p>Email</p>
                                </div>
                                <div className="infoValue">
                                    <p>{user.userName}</p>
                                    <p>{user.userEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : null
            }
        </div>
    )
}