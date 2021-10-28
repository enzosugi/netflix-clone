import React from "react";
import styled from "styled-components";


const StyledFeatured = styled.div `
    .featured {
        height: 90vh;
    }

    .featured--vertical {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }

    .featured--horizontal {
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%, transparent 70%); 
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 150px;
    }

    .featured--name {
        font-size: 60px;
        font-weight: bold;
    }

    .featured--info {
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }

    .featured--points {
        color: #46d369;
    }

    .featured--points, 
    .featured--year, 
    .featured--season {
        display: inline-block;
        margin-right:15px;
    }

    .featured--description {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
    }

    .featured--buttons {
        margin-top: 15px;

    }

    .featured--watchbutton, 
    .featured--mylistbutton {
        display:inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 15px 25px; 
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2;
    }

    .featured--watchbutton:hover, 
    .featured--mylistbutton:hover {
        opacity: 0.7;
    } 

    .featured--watchbutton {
        background-color: #FFF;
        color: #000;
    }

    .featured--mylistbutton {
        background-color: #333;
        color: #fff;
    }
    
    .featured--genres {
        margin-top: 15px;
        font-size: 18px;
        color: #999;
    }
`

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <StyledFeatured>
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className="featured--vertical">
                    <div className="featured--horizontal">
                        <div className="featured--name">{item.original_name}</div>
                        <div className="featured--info">
                            <div className="featured--points">{item.vote_average} pontos</div>
                            <div className="featured--year">{firstDate.getFullYear()}</div>
                            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''}</div>
                        </div>
                        <div className="featured--description">{item.overview}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchbutton"> ► Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured--mylistbutton"> + Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
                    </div>
                </div>
            </section>
        </StyledFeatured>
    )
}