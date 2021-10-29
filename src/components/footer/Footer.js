import React from "react";
import {GoHeart} from 'react-icons/go';
import styled from "styled-components";

const StyledFooter = styled.div `
    footer {
        margin: 50px 0;
        text-align: center;
    }
`

export default () => {
    return(
        <StyledFooter>
            <footer>
                Feito com <span role="img" aria-label="coração"><GoHeart/></span> por Enzo Sugi!
                <p>Direitos de imagem para Netflix</p>
                <p>Dados pegos do site Themoviedb.org</p>
            </footer>
        </StyledFooter>
    )
}