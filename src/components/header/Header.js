import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div `
    header {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        background: transparent;
        transition: all ease 0.5s;
    }

    header.black {
        background-color: #141414;
    }

    .header--logo {
        height:85px;
    }

    .header--logo img {
        height: 100%;
    }

    .header--user {
        height: 45px;
    }

    .header--user img {
        height: 100%;
        border-radius: 3px;
    }
`

export default ({black}) => {
    return (
        <StyledHeader>
            <header className={black ? 'black' : ''}>
                <div className="header--logo">
                    <a href="/">
                        <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="logo netflix" />
                    </a>
                </div>
                <div className="header--user">
                    <a href="">
                        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
                    </a>
                </div>
            </header>
        </StyledHeader>
    )
}