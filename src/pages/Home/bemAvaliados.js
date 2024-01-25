import { Container, Header, MovieList, Movie } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MelhoresFilmes() {

    const [bemAvaliados, setBemAvaliados] = useState([]);
    
    const melhorAvaliados = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk4NmU2NzUzOTc2NTI3MDk3ODlmYTBhMzM4NjJhZSIsInN1YiI6IjY1YjA2ZGQ4YmQ1ODhiMDBhZDk2OGM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eFXpWHM1WLGC_k3QN91L7nHZ7SQS17qzBZZX8UUX_Y0`     
        }
      }; 

    useEffect(() => {

      fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', melhorAvaliados)
        .then(response => response.json())
        .then(response => setBemAvaliados(response.results))
        .catch(err => console.error(err));

        
    }, [])

    return (
        <>
            
            <Container id='bemAvaliados'>
                <h1>Melhor Avaliados</h1>
                
                <MovieList>
    
                    {bemAvaliados.map(bemAvaliados => (
                            <Movie key={bemAvaliados.id}>
                                <Link to={`/detalhes/${bemAvaliados.id}`} ><img src={`https://image.tmdb.org/t/p/w500${bemAvaliados.poster_path}`} alt={bemAvaliados.title}/></Link>
                                <span>{bemAvaliados.title}</span> 
                            </Movie>
                        
                    ))}
    
                </MovieList>
            </Container>
        </>
        )
    
    }
    
    export default MelhoresFilmes;