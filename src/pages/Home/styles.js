import styled from 'styled-components'

export const Header = styled.div`
.cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 1rem;
    margin-bottom: 2rem;
}

h2 {
    text-align: flex-start;
}

input {
    border: 1px solid white;
    border-radius: 5px 0 0 5px;
    width: 10rem;
    height: 1.5rem;
    color: white;
    background-color: black;
    padding-left: .3rem;
}

button {
    border: 1px solid white;
    border-radius: 0 5px 5px 0;
    width: 3rem;
    height: 1.5rem;
    background-color: black;
    color: white;
}

button:hover {
    border: none;
    border-radius: 0 5px 5px 0;
    width: 3rem;
    height: 1.5rem;
    background-color: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transform: scale(1.1);
    transition: all .2s
}

hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(555, 555, 555, 0.15), rgba(555, 555, 555, 0.75), rgba(555, 555, 555, 0.15));
}

`

export const Container = styled.div`
h1 {
    text-align: center;
    margin: 4rem 0;
}

`

export const MovieList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 3rem;
row-gap: 4rem;

`

export const Movie = styled.li`
display: flex;
flex-direction: column;
align-items: center;

img {
    width: 200px;
    border-radius: 1rem;
    margin-bottom: 2rem;

}

span {
    font-weight: bold;
    font-size: 130%;
}

a {
    transition: all 0.3s;
}

a:hover {
   transform: scale(1.2) 
}

`
