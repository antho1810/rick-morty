import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from "react";
import Characters from './components/Characters';

function App() {

    const [characters, setcharacters] = useState(null);


    const reqAPi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        const characterAPi = await api.json();

        // console.log(characterAPi);
        // console.log(api);
        console.log("Clicking");


        setcharacters(characterAPi.results);
    };

    console.log(characters);

    return (
    <div className="App" >
        <header className="App-header" >
            <h1 className="title" > Rick & Morty </h1>
            {characters ? (
                <Characters characters={characters} setcharacters={setcharacters}/>
            ) : (
                <>
                    <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
                    <button onClick={reqAPi} className="btn-search">Buscar Personajes</button>
                </>
            )}
        </header>
    </div>

    );
}

export default App;