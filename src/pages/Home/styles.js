import styled from 'styled-components'

export const Header = styled.div`
background-color: black;
position: -webkit-sticky; /* Necessário para funcionar no Safari */
position: sticky;
top: 0;
width: 100%;

.cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 1rem;
    margin-bottom: 2rem;
}

h1 {
    text-align: flex-start;
}

.menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40rem;
    gap: 7rem;
}

.menu button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: black;
    color: white;
    width: auto-fit;
    height: 2.5rem;
    padding: .3rem;
    font-size: 20px;
    font-weight: 700;
}

.menu button:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all .3s;
    outline: none;
    box-shadow: 9px 10px 12px -10px rgba(255,255,255,0.57);
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

.pesquisa button {
    border: 1px solid white;
    border-radius: 0 5px 5px 0;
    width: 3rem;
    height: 1.5rem;
    background-color: black;
    color: white;
}

.pesquisa button:hover {
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
padding-top: 1rem;

h1 {
    text-align: flex-start;
    margin: 4rem 0;
}

hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(555, 555, 555, 0.15), rgba(555, 555, 555, 0.75), rgba(555, 555, 555, 0.15));
}

`

export const MovieList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 3rem;
row-gap: 4rem;
padding-bottom: 4rem;

`

export const Movie = styled.li`
display: flex;
flex-direction: column;
align-items: center;

img {
    width: 240px;
    margin-bottom: 2rem;

}

span {
    font-weight: bold;
    font-size: 130%;
    text-align: center;
}

a {
    transition: all 0.3s;
}

a:hover {
   transform: scale(1.2) 
}

`
