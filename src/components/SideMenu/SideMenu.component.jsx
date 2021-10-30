import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom";

import {BurgerContainer, BurgerTile, List, ListItem, SideMenuContainer, SideNav} from "./styles";
import BurgerMenuComponent from "../BurgerMenu";
import {StateContext} from '../App/App.component'

const SideMenuComponent = (props) => {
    const [display, setDisplay] = useState(false);
    const {isLoggedIn} = useContext(StateContext)

    return (
        <SideMenuContainer>
            <BurgerContainer onClick={() => setDisplay(!display)} role={"showmenu"}>
                <BurgerMenuComponent/>
            </BurgerContainer>
            {display &&
            <SideNav>
                <List>
                    <ListItem>
                        <Link to={"/"}>Home</Link>
                    </ListItem>
                    {isLoggedIn && (
                        <div>
                            <ListItem>
                                <Link to={"/favorites"}>Favorites</Link>
                            </ListItem>
                            <ListItem>
                                <Link to={"/logout"}>Logout</Link>
                            </ListItem>
                        </div>
                    )
                    }
                    { !isLoggedIn &&
                        <ListItem>
                            <Link to={"/login"}>Login</Link>
                        </ListItem>
                    }
                </List>
            </SideNav>
            }
        </SideMenuContainer>
    )
}

export default SideMenuComponent