import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <Navbar>
            <a href="#">
                <img src="/img/logo.svg" alt="" />
            </a>

            <Menu>
                <a href="#">Model S</a>

                <a href="#">Model 3</a>

                <a href="#">Model X</a>

                <a href="#">Model Y</a>

                <a href="#">Solar Roof</a>

                <a href="">Solar Panels</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>

                <a href="#">Account</a>

                <p onClick={() => setMenuStatus(true)}>Menu</p>
            </RightMenu>

            <MenuNav show={menuStatus}>
                <MenuClose>
                    <i onClick={() => setMenuStatus(false)}>X</i>
                </MenuClose>
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-In</a>
                </li>
                <li>
                    <a href="#">Test Drive</a>
                </li>
                <li>
                    <a href="#">Insurance</a>
                </li>
                <li>
                    <a href="#">Powerwall</a>
                </li>
                <li>
                    <a href="#">Commercial Energy</a>
                </li>
                <li>
                    <a href="#">Utilities</a>
                </li>
                <li>
                    <a href="#">Charging</a>
                </li>
                <li>
                    <a href="#">Find Us</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Investor Relations</a>
                </li>
                <li>
                    <a href="#">Shop</a>
                </li>
                <li>
                    <a href="#">Account</a>
                </li>
                <li>
                    <a href="#">More</a>
                </li>
            </MenuNav>
        </Navbar>
    );
}

const Navbar = styled.div`
    min-height: 60px;
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background-color: transparent;
    z-index: 998;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-weight: 600;
        padding: 8px 12px;
    }

    @media (max-width: 968px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a,
    p {
        font-weight: 600;
        padding: 8px 12px;
    }

    p {
        cursor: pointer;
        transition: all 0.2s ease;
    }

    @media (max-width: 968px) {
        a {
            display: none;
        }
        p {
            background: rgba(0, 0, 0, 0.06);
            padding: 8px 15px;
            border-radius: 10px;
            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
        }
    }
`;

const MenuNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index; 999;
    list-style: none;
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-out;
    li {
        padding: 10px 20px;
    }

    a{
        font-weight: 600;
        font-size: 16px;
    }
`;

const MenuClose = styled.div`
    display: flex;
    justify-content: flex-end;
    i {
        margin-top: 20px;
        margin-right: 40px;
        padding: 10px;
        cursor: pointer;

        &:hover {
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.06);
        }
    }
`;

export default Header;
