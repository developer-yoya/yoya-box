import { useState } from "react";
import styled from "styled-components";

const FirstButton = styled.button`
    display:inline-block;
    border-radius: 3px;
    padding:0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border: none;
    background:pink;
`;

const SecondButton = styled(FirstButton)`
    background:red;
    color: white;
`

const ThirdButton = styled(SecondButton)`
    background:${({dark}) => dark ? "black" : "green"};
`

const Practice = () => {

    
    
    return(

        <>
            <FirstButton>ボタン</FirstButton>
            <SecondButton>ボタン２</SecondButton>
            <ThirdButton dark>ボタン3</ThirdButton>
        </>

    )

}

export default Practice;

localhost:3000//Practice