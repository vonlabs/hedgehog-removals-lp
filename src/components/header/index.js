import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import styled from 'styled-components'

import Button from '../button'
import Logo from '../logo'

import MuiIconButton  from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navigation = styled.nav`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    @media (max-width: 850px) {
        height: 60px;
    }
    background: #44B758 0% 0% no-repeat padding-box;
    position: relative;
`;

const DirtyFix = styled.span`
    background: #44B758 0% 0% no-repeat padding-box;
    z-index: -1;
    position: absolute;;
    width: 100vw;
    height: 80px;
    top: 0;
    left: 0;
`;

const Center = styled.div`
    width: 100%;

    max-width: 1502px;
    margin-left: 24px;
    margin-right: 36px;
 //   max-width: 502px;
    height: 60px;
    display: inline-flex;
    justify-content: space-between;
    @media (max-width: 850px) {
        justify-content: flex-start;
        align-items: center;
        margin-left: 6px;
    }

    ${({ mobile }) => mobile && `
        @media (max-width: 850px) {
            margin-left: -10px;
        }
    `}
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    @media (max-width: 1150px) {
        width: 420px;
    }
    @media (max-width: 850px) {
        display: none;
    }
`;


const LinkContainer = styled.div`

`;


const MobileMenu = styled(({ ...rest }) => <MuiIconButton  {...rest} />)`
    color: white;
    width: 46px;
    height: 46px;
    @media (min-width: 851px) {
        display: none;
    }
`

const LinkContainerMobile = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: #44B758 0% 0% no-repeat padding-box;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    @media (min-width: 851px) {
        display: none;
    }
    ${({ on }) => !on && `
        display: none;
    `}
`;


function Linkss(props) {
    let location = useLocation();
    return (
        <React.Fragment>
            <Button
                component={Link}
                to="/"
                bold={"/" === location.pathname}
        //        width="90"
                width="111"
                menu
                onClick={props.menuOff}
            >
                About us
            </Button>
            <Button
                component={Link}
                to="/prices"
                bold={"/prices" === location.pathname}
        //        width="69"
                width="82"
                menu
                onClick={props.menuOff}
            >
                Prices
            </Button>
            <Button
                component={Link}
                to="/book-now"
                bold={"/book-now" === location.pathname}
        //           width="100"
                width="123"
                menu
                onClick={props.menuOff}
            >
                Book now
            </Button>
            <Button
                component={Link}
                to="/get-your-quote"
                bold={"/get-your-quote" === location.pathname}
        //        width="143"
                width="178"
                menu
                onClick={props.menuOff}
            >
                Get your quote
            </Button>
            <Button
                component={Link}
                to="/man-and-van"
                bold={"/man-and-van" === location.pathname}
    //            width="102"
                width="126"
                menu
                onClick={props.menuOff}
            >
                Man & van
            </Button>
            <Button
                component={Link}
                to="/contact"
                bold={"/contact" === location.pathname}
        //          width="90"
                width="110"
                menu
                onClick={props.menuOff}
            >
                Contact
            </Button>
        </React.Fragment>
    );
  }
  

function Header() {
    let location = useLocation();
    const [menu , set_menu] = React.useState(false);
    console.log('location', location.pathname)

    const menuOn = () => {
        document.querySelector('body').classList.add("noOverflow");
        set_menu(true);
    } 
    
    const menuOff = () => {
        console.log('menuOff')
        document.querySelector('body').classList.remove("noOverflow");
        set_menu(false);
    } 

    return (
        <Navigation>
            <Center>
                <MobileMenu 
                    onClick={()=>{
                            if(!menu) menuOn() 
                            else menuOff() 
                        }
                    }
                >
                    <MenuIcon/>
                </MobileMenu>
                <Logo/>
                <Links>
                    <Linkss/>
                </Links>
            </Center>
            <DirtyFix/>
            <LinkContainerMobile on={menu}>
                <Center mobile>
                    <MobileMenu 
                        onClick={()=>{
                                if(!menu) menuOn() 
                                else menuOff() 
                            }
                        }
                    >
                        <CloseIcon/>
                    </MobileMenu>
                    <Logo/>
                </Center>
                <Linkss menuOff={()=>{menuOff()}} />
            </LinkContainerMobile>
        </Navigation>
    );
  }
  
export default Header;
  