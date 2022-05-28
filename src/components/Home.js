import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function Home() {
  return (
    <Container>
        <Section title="Model 3"  img="model-3.jpg" leftButton="custom order" rightButton="existing inventory" />
        <Section title="Model Y" img="model-y.jpg" leftButton="custom order" rightButton="existing inventory" />
        <Section title="Model S" img="model-s.jpg" leftButton="custom order" rightButton="existing inventory" />
        <Section title="Model X" img="model-x.jpg" leftButton="custom order" rightButton="existing inventory" />
        <Section title="Solar Panels" img="solar-panel.jpg" leftButton="order now" rightButton="learn more" />
        <Section title="Solar Roof" img="solar-roof.jpg" leftButton="order now" rightButton="learn more" />
        <Section title="Accessories" img="accessories.jpg" leftButton="shop" />
    </Container>
  )
}



const Container =  styled.div`
    height: 100vh;
`

export default Home