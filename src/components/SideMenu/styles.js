import styled from 'styled-components'

export const SideMenuContainer = styled.div`
    color: white; 
    position: fixed;
    z-index: 3;
    margin: 0;
`
export const SideNav = styled.nav`
  height: 100vh;
  width: 200px;
  background: rgba(0,0,0,0.8);
  border-radius: 10px;
`

export const List = styled.ul`
  list-style: none;
  margin: 26px 5px;
  padding: 10px;
  box-sizing: border-box;
`

export const ListItem = styled.li`
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  font-weight: bold;
  height: 25px;
  transition: 0.2s;
  :hover{
    background: rgba(255, 255, 255, 0.5);
  }
  a{
      color: white;
      text-decoration: none;  
  }
`

export const BurgerContainer = styled.div`
  transition: 0.2s;
  /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
        width: 27px;
        height: 25px;
        z-index: 3;
        left: 16px;
        top: 24px;
    }
    .bm-burger-bars {
      background: #ffffff;
    }
    
    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: #0b00a9;
    }
    
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    
    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
    
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
      padding: 0.8em;
    }
    
    /* Individual item */
    .bm-item {
      display: inline-block;
    }
    
    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }

`

export const BurgerTile = styled.span`
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
`