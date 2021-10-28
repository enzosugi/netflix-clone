import React from "react";
import styled from "styled-components";

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
        width: 99999999px;
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
`

export default ({title, items}) => {
    return (
        <StyledMovieRow>
            <div className="movieRow">
                <h2>{title}</h2>
                <div className="movieRow--listarea">
                    <div className="movieRow--list">
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

