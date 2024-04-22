import {API_URL} from './App.js';
import getElemento from "./lib/getElemento.js";
import PeliculaCard from "./PeliculaCard.js";

const Home = () => {
    const buscarPeliculas = async (titulo) => {
        const response = await fetch(`${API_URL}?nombre=ad`);
        const data = await response.json();

        const resultados = await getElemento('.resultados');
        resultados.innerHTML = dibujaPeliculas(data)
    }

    const dibujaPeliculas = (peliculas) =>{
        return `
        ${peliculas?.lengh > 0 
            ? `
            <div class="container">
                 ${peliculas.map((pelicula) => PeliculaCard(pelicula)).join('')}
            </div>
            `:
            `
            <div class="empty">
            <h2>No hay peliculas encontradas</h2
            </div>
            `
        }
        `;
    }

    const botonBuscar = async() => {
        const buscar = await getElemento('#imgBuscar');
        buscar.addEventListener('click', (e) =>{
            const searchTerm = document.querySelector('#txtBuscar').value;
            buscarPeliculas(searchTerm);
        });
    }

    buscarPeliculas();
    botonBuscar();

    return `<div class="search">
               <input="txtBuscar" placeholder="Buscar peliculas por titulo"/>
               <img id="imgBuscar" src="search.svg" alt="Buscar" />
            </div>
            <div class="resultados"></div>
            `;   
}

export default Home;