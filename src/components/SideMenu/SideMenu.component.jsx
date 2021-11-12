import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu'

import {BurgerContainer} from "./styles";

import {StateContext} from "../../StateHandlers/AppContext";

const SideMenuComponent = (props) => {
    const {isLoggedIn} = useContext(StateContext)

    function showSettings(e) {
        e.preventDefault();
    }

    return (
        <BurgerContainer>
            <Menu>
                <Link to={"/"}>Home</Link>
                {isLoggedIn && (
                    <div>
                        <Link to={"/favorites"}>Favorites</Link>
                        <Link to={"/logout"}>Logout</Link>
                    </div>
                )}
                { !isLoggedIn &&
                    <Link to={"/login"}>Login</Link>
                }
            </Menu>
        </BurgerContainer>
    )
}

export default SideMenuComponent