import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

function Section({
    title,
    description,
    backgroundImg,
    leftButton,
    rightButton
}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftButton}</LeftButton>
                        {rightButton && (
                            <RightButton>{rightButton}</RightButton>
                        )}
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/img/down-arrow.svg" />
            </Buttons>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/img/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items; center; 
`;
const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items; center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 48px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Section;
