import { Container, Header, MovieList, Movie } from "./styles";
import { useEffect, useState } from "react";
import MelhoresFilmes from "./bemAvaliados";
import EmBreve from "./emBreve";
import { Link } from "react-router-dom";

function Home() {

    const [movies, setMovies] = useState([]);
    
    const buscaFilme = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk4NmU2NzUzOTc2NTI3MDk3ODlmYTBhMzM4NjJhZSIsInN1YiI6IjY1YjA2ZGQ4YmQ1ODhiMDBhZDk2OGM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eFXpWHM1WLGC_k3QN91L7nHZ7SQS17qzBZZX8UUX_Y0`     
        }
      }; 

    useEffect(() => {

      fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', buscaFilme)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));

        
    }, [])

    return (
    <>
        <Header>
            <div className="cabecalho">
                <div className="nome">
                    <h1>CineArte</h1>
                </div>

                <div className="menu">
                    <button type="button"><a className="links" href="#populares">Populares</a></button>
                    <button type="button"><a className="links" href="#bemAvaliados">Melhor Avaliados</a></button>
                    <button type="button"><a className="links" href="#em_breve">Em Breve</a></button>
                </div>

                <div className="pesquisa">
                    <input placeholder="Pesquise um filme aqui"></input>
                    <button type="button">Buscar</button>
                </div>
            </div>

            <hr></hr>
        </Header>
        
        <Container id="populares">

            <h1>Filmes Populares</h1>

            <MovieList>

                {movies.map(movies => (
                        <Movie key={movies.id}>
                            <Link to={`/detalhes/${movies.id}`} ><img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title}/></Link>
                            <span>{movies.title}</span> 
                        </Movie>
                    
                ))}


            </MovieList>

            <hr/>
             
            <MelhoresFilmes />

            <hr/>

            <EmBreve/>

        </Container>
    </>
    )

}

export default Home;