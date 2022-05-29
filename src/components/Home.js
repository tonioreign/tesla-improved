import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                id="model-3"
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftButton="custom order"
                rightButton="existing inventory"
            />
            <Section
                id="model-y"
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftButton="custom order"
                rightButton="existing inventory"
            />
            <Section
                id="model-s"
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftButton="custom order"
                rightButton="existing inventory"
            />
            <Section
                id="model-x"
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftButton="custom order"
                rightButton="existing inventory"
            />
            <Section
                id="solar-panels"
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftButton="order now"
                rightButton="learn more"
            />
            <Section
                id="solar-roof"
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftButton="order now"
                rightButton="learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftButton="shop"
            />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
`;

export default Home;
