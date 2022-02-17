export default function Characters(props) {
    const {characters, setcharacters} = props;

    const resetCharacters = ()=>{
        setcharacters(null);
    }
    // console.log(characters);
    // console.log(props);
    return <div className="characters">
        <h1> Personajes </h1>
        <span className="back-home" onClick={resetCharacters}>Volver al home</span>
        <div className="container-characters">
            {characters.map((character, index) =>(
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name} srcset="" />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                <span className="alive">
                                    Alive
                                </span>
                                </>
                            ) : (
                                <>
                                <span className="dead">
                                    Dead
                                </span>
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios:</span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie:</span>
                            <span>{character.species}</span>
                        </p>
                    </div>
                    {/* <p>{character.name}</p> */}
                </div>
            ))}
            </div> 
            <span className="back-home"  onClick={resetCharacters}>Volver al home</span>
        </div>
}