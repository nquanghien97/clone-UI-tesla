import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade"

function Section(props) {
    return (
        <Wrap id={props.id} bgImage={props.background}> 
            <Fade left>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {
                    props.rightBtnText &&
                    <RightButton>
                    {props.rightBtnText}
                    </RightButton>
                    }  
                </ButtonGroup>
            </Fade>
            <DownArrow src='/images/down-arrow-svgrepo-com.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: green;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1 {
        margin-bottom: 10px;
    }
    
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    @media(max-width: 768px) {
        flex-direction: column
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: 600;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
   width: 32px;
   height: 32px;
   margin-top: 20px; 
   animation: animateDown infinite 1.5s;
//    overflow-x: hidden;
    margin-bottom: 12px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
