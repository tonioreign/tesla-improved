import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Navbar>
            <a>
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

            <Nav>
                <a href="#">Shop</a>

                <a href="#">Account</a>

                <p href="#">Menu</p>
            </Nav>
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
    z-index: 999;
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

const Nav = styled.div`
    display: flex;
    align-items: center;
    a,
    p {
        font-weight: 600;
        padding: 8px 12px;
    }

    @media (max-width: 768px) {
        a {
            display: none;
        }
    }
`;

export default Header;
