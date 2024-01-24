import { Container, Header, MovieList, Movie } from "./styles";
import { APIKey } from "../../config/chave";
import { useEffect, useState } from "react";

function Home() {

    const [movies, setMovies] = useState([]);
    
    const buscaFilme = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIKey}`     
        }
      }; 

    useEffect((buscaFilme) => {

      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', buscaFilme)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
        
    }, [])

    return (
    <>
        <Header>
            <div className="cabecalho">
                <div className="nome">
                    <h2>CineArte</h2>
                </div>

                <div className="pesquisa">
                    <input placeholder="Pesquise um filme aqui"></input>
                    <button type="button">Buscar</button>
                </div>
            </div>

            <hr></hr>
        </Header>
        
        <Container>
            <h1>Filmes Populares</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/></a>
                            <span>{movie.title}</span> 
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    </>
    )

}

export default Home;