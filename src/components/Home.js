import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
            <Container>
                <Section
                    id='1'
                    title="Model S"
                    description="Order Online for Touchless Delivery"
                    background="model-s.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
                />
                <Section
                    id='2'
                    title="Model Y"
                    description="Order Online for Touchless Delivery"
                    background="model-y.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
                />
                <Section 
                    id='3'  
                    title="Model 3"
                    description="Order Online for Touchless Delivery"
                    background="model-3.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
                />
                <Section 
                    id='4'
                    title="Model X"
                    description="Order Online for Touchless Delivery"
                    background="model-x.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
                />
                <Section 
                    id= '5'
                    title="Solar Panels"
                    description="Lowest Cost Solar Panels in America"
                    background="solar-panel.jpg"
                    leftBtnText="Oder now"
                    rightBtnText="learn more"
                />
                <Section 
                    id= '6'
                    title="Solar Roof"
                    description="Produce Clean Energy From Your Roof"
                    background="solar-roof.jpg"
                    leftBtnText="Oder now"
                    rightBtnText="learn more"
                />
                <Section 
                    id= '7'
                    title="Accessories"
                    background="accessories.jpg"
                    leftBtnText="Shop now"
                />
            </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
