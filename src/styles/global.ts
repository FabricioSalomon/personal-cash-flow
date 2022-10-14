import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --shape: #FFFFFF;
        
        --blue: #5429CC;
        --light-blue:#6933FF;
        --green: #33CC95;
        --red: #E52E4D;
        
        --text-title: #363F5F;
        --text-body: #969CB2;

        --input-fill: #E7E9EE;
        --input-border: #D7D7D7;

        --modal-background: #F0F2F5;
    }

    /* 
        font-size padrão desktop 16px
        REM => 1rem = font-size da página, por isso usar porcentagens de valor 
        Outro motivo do percentual para fontes é: caso o usuário aumente a fonte do celular 
        dele nas configurações de acessibilidade, o percentual será referente a ele, um valor
        fixo irá mudar à força o tamanho, sem respeitar a acessibilidade do dispositivo do usuário
    */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1024px) {
            font-size: 93.75%;
        }
        
        @media (max-width: 768px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button { // input, textarea e button não importam a font do body, eles tem a própria
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            background: rgba(0, 0, 0, 0.7);
            align-items: flex-end;
            justify-content: center;
        }
    }

    .react-modal-content {
        background: var(--modal-background);
        padding: 3rem;
        border-radius: 0.5rem;
        width: 70%;
        height: 70%;
        max-width: 700px;
        
        @media (max-width: 768px) {
            width: 100%;
            height: fit-content;
            padding: 1.5rem 1.5rem 2.25rem 1.5rem;
            border-radius: 1rem 1rem 0rem 0rem;
        }
    }
`;
