import React from "react";
import { typeScale } from "../utils";
import { Illustrations } from "../assets";
import { PrimaryButton } from "./Buttons";
import styled from "styled-components";

const ModalWrapper = styled.div`
 width: 800px;
 height: 500px;
 box-shadow: 0 5px 16px rgba(0,0,0,0.2);
 background-color: ${props => props.theme.formElementBackground};
 color: ${props => props.theme.textOnFromElementBackground};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-content: center;
 position: relative;
 border-radius: 2px;
`;

const SignUpHeader = styled.h3`
 font-size: ${typeScale.header3};
`;

const signUpText = styled.p`
 font-size: ${typeScale.paragraph};
 max-width: 70%;
 text-align: center;
`;

export const SignUpModal = () => {
    return (
        <ModalWrapper>
            <img scr={Illustrations.SignUp} alt="" aria-hidden="true" />
            <SignUpHeader>Sign Up</SignUpHeader>
            <signUpText>Sign up today to get access!</signUpText>
            <PrimaryButton>Sign Up</PrimaryButton>
        </ModalWrapper>
    );
};

  
