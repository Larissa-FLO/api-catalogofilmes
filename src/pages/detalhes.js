import {useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../pages/detalhes.css'


function DetalhesFilme() {

    const { id } = useParams();


    console.log(id)

    const [detalhes, setDetalhes] = useState([]);

    const buscaDetalhes = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk4NmU2NzUzOTc2NTI3MDk3ODlmYTBhMzM4NjJhZSIsInN1YiI6IjY1YjA2ZGQ4YmQ1ODhiMDBhZDk2OGM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eFXpWHM1WLGC_k3QN91L7nHZ7SQS17qzBZZX8UUX_Y0'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, buscaDetalhes)
        .then(response => response.json())
        .then(response => setDetalhes(response))
        .catch(err => console.error(err));

    return (
        <>
        <div className="caixaDetalhes">

        <div className="caixaMedia"> 
            <div className="posterFilme">
                <img src={`https://image.tmdb.org/t/p/w500${detalhes.poster_path}`} alt={detalhes.title}/>
            </div>

            <div className="informacoes">

                <div className="tituloFilme">
                   <span>{detalhes.vote_average}</span>
                   <h2>{detalhes.title}</h2>
                </div>

                <div className="dadosFilme">
                   <span>{`Data de Lançamento: ${detalhes.release_date}`}</span>
                   <span>{`Duração: ${detalhes.runtime} minutos`}</span>
                   <span>{`Orçamento: ${detalhes.budget}`}</span>
                </div>

                <div className="sinopse">
                   <span>{`Sinopse: ${detalhes.overview}`}</span>
                </div>

            </div>
        </div>

            <div className="frase">
            <span>{`"${detalhes.tagline}"`}</span>
            </div>

            <Link to='/' className="btn"><button>Voltar</button></Link>

        </div>

        

        </>
    )

}

export default DetalhesFilme;