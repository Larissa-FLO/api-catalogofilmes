import { Container, Header, MovieList, Movie } from "./styles";

function Home() {

    const arrayMovies = [
        {
            id: 1,
            title: 'Spider Man',
            image_url: 'https://www.itaucinemas.com.br/_img/_filmes/5327_capa.jpg?Barbie',
        },

        {
            id: 2,
            title: 'Avengers',
            image_url: 'https://www.itaucinemas.com.br/_img/_filmes/5327_capa.jpg?Barbie',
        },

        {
            id: 3,
            title: 'Barbie',
            image_url: 'https://www.itaucinemas.com.br/_img/_filmes/5327_capa.jpg?Barbie',
        }
    ]

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
            <h1>Movies</h1>
            <MovieList>

                {arrayMovies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title}/></a>
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