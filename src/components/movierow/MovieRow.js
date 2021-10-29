import React, {useState} from "react";
import styled from "styled-components";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";

const StyledMovieRow = styled.div `
    .movieRow {
        margin-bottom: 30px;
    }

    .movieRow h2 {
        margin: 0px 0px 0px 30px;
    }

    .movieRow--listarea {
        overflow-x: hidden;
        padding-left: 30px;
    }

    .movieRow--list {
        transition: all ease 0.5s;
    
    }
    .movieRow--item {
        display: inline-block;
        width: 200px;
    }

    .movieRow--item img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
        cursor: pointer;
    }

    .movieRow--item img:hover {
        transform: scale(1);
    }

    .movieRow--left, 
    .movieRow--right {
        position: absolute;
        width: 40px;
        height: 300px;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;

    }

    .movieRow--left {
        left: 0;
    }

    .movieRow--right {
        right: 0;
    }

    .movieRow:hover .movieRow--left,
    .movieRow:hover .movieRow--right {
        opacity: 1;
    }
`

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(-400)
    // função para passar a lista para a esquerda
    const handleLeftArrow = ()=> {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    // função para passar a lista para a direita 
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 200;
        if((window.innerWidth - listW > x)) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <StyledMovieRow>
            <div className="movieRow">
                <h2>{title}</h2>
                <div className="movieRow--left" onClick={handleLeftArrow}>
                    <MdNavigateBefore style={{fontSize: 70}}/>
                </div>
                <div className="movieRow--right" onClick={handleRightArrow}>
                    <MdNavigateNext style={{fontSize: 70}}/>
                </div>

                <div className="movieRow--listarea">
                    <div className="movieRow--list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 200
                    }}>
                        {items.results.length > 0 && items.results.map((item, key)=>(
                            <div className="movieRow--item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </StyledMovieRow>
    );
}

