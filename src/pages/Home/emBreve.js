import { Container, MovieList, Movie } from "./styles";
import { useEffect, useState } from "react";

function EmBreve() {

    const [upComing, setUpComing] = useState([]);
    
    const emBreve = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk4NmU2NzUzOTc2NTI3MDk3ODlmYTBhMzM4NjJhZSIsInN1YiI6IjY1YjA2ZGQ4YmQ1ODhiMDBhZDk2OGM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eFXpWHM1WLGC_k3QN91L7nHZ7SQS17qzBZZX8UUX_Y0`     
        }
      }; 

    useEffect(() => {

      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', emBreve)
        .then(response => response.json())
        .then(response => setUpComing(response.results))
        .catch(err => console.error(err));

        
    }, [])

    return (
        <>
            
            <Container id='em_breve'>
                <h1>Em Breve</h1>
                
                <MovieList>
    
                    {upComing.map(upComing => (
                            <Movie key={upComing.id}>
                                <a href="https://google.com.br"><img src={`https://image.tmdb.org/t/p/w500${upComing.poster_path}`} alt={upComing.title}/></a>
                                <span>{upComing.title}</span> 
                            </Movie>
                        
                    ))}
    
                </MovieList>
            </Container>
        </>
        )
    
    }
    
    export default EmBreve;