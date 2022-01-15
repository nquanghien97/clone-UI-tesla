import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { Anchor } from 'antd';


const { Link } = Anchor;


function Header() {

    const [closeSubMenu, setCloseSubMenu] = useState(false);
    return (
        <div>
            <Container> 
                <a href="/#"><img src="./images/logo.svg" alt="logo"></img></a>
                <Anchor>
                    <Menu>
                    <Link href="/#1" title="Model S" />
                    <Link href="/#2" title="Model Y" />
                    <Link href="/#3" title="Model 3" />
                    <Link href="/#4" title="Model X" />
                    <Link href="/#5" title="Solar Roof" />
                    <Link href="/#6" title="Solar Panels" />
                    <Link href="/#7" title="Accessories" />
                    </Menu>
                </Anchor>
                <RightMenu>
                <li>Shop</li>
                <li>Account</li>
                <li onClick={() => setCloseSubMenu(true)}>Menu</li>
                </RightMenu>
                <SubMenu show={closeSubMenu}>
                    <CloseWrap>
                        <IconClose onClick={() => setCloseSubMenu(false)}/>
                    </CloseWrap>
                    <li><a href="/#">Existing Inventory</a></li>
                    <li><a href="/#">Trade-in</a></li>
                    <li><a href="/#">Used inventory</a></li>
                    <li><a href="/#">Test Drive</a></li>
                    <li><a href="/#">Cybertruck</a></li>
                    <li><a href="/#">Roadster</a></li>
                    <li><a href="/#">Semi</a></li>
                    <li><a href="/#">Charging</a></li>
                    <li><a href="/#">Powerwall</a></li>
                    <li><a href="/#">Commercial Energy</a></li>
                    <li><a href="/#">Utilities</a></li>
                    <li><a href="/#">Find Us</a></li>
                    <li><a href="/#">Support</a></li>
                    <li><a href="/#">Investor Relations</a></li>
                </SubMenu>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    position: fixed;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 20px;
    z-index: 100;
    a {
        padding-left: 10px;
    }
`



const Menu = styled.div`
    display: flex;
    a {
        padding: 6px 8px;
        font-size: 16px;
        &:hover {
            background: rgba(240, 240, 240, 0.3);
            border-radius: 12px;
            box-shadow: 1px 1px;
        }
    }
    @media(max-width: 1024px){
        display: none;
    }

`

const RightMenu = styled.div`
    min-width: 200px;
    display: flex;
    li {
        padding: 6px 8px;
        &:hover {
            background: rgba(240, 240, 240, 0.3);
            border-radius: 12px;
            box-shadow: 1px 1px;
        }
        cursor: pointer;
    }
`

const SubMenu = styled.div`
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 20px;
    width: 300px;
    z-index: 1000;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
`

const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`

const IconClose = styled(CloseIcon)`
    cursor: pointer;
    margin-right: 24px;
    // padding: 4px;
    &:hover {
        background: rgba(240, 240, 240, 0.3);
        border-radius: 4px;
        box-shadow: 1px 1px 1px 1px;
    }
`


