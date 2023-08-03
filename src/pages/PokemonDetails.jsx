import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const PokemonDetails =()=>{
    const [pokemonDetails, setPokemonDetails] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resp => setPokemonDetails(resp.data))
            .catch(error=>{
                navigate("/notFound"),
                console.error(error)
            })
    },[id])

    return(
        <>
            <Outlet/>
            <main className="details">
                <button onClick={()=>navigate(-1)} className="return">Return</button>
                <div className={`pokedetails ${pokemonDetails?.types?.[0]?.type.name}`}>
                    <div className="principal-dates">
                        <div className="most-important-dates">
                            <h2>{pokemonDetails.name}</h2>
                            <img src={pokemonDetails.sprites?.other.dream_world.front_default} alt="" />
                            <div className="phisicaldates">
                                <p>Height: {pokemonDetails.height}</p>
                                <p>Weight: {pokemonDetails.weight}</p>
                            </div>
                            
                        </div>
                        <hr />
                        <div className="stats">
                            <div className="statstitle">
                                <h3>stats</h3>  
                            </div>
                            <div className="stats-section">
                                <div>
                                    <p>HP: {pokemonDetails.stats?.[0].base_stat}</p>
                                    <div className="stats-bar">
                                        <div
                                        className="stats-fill"
                                        style={{
                                        width: `${(pokemonDetails.stats?.[0].base_stat / 150) * 100}%`,
                                        backgroundColor: '#00FF00'
                                        }}
                                    />
                                    </div>
                                </div>
                                <div>
                                    <p>Attack: {pokemonDetails.stats?.[1].base_stat}</p>
                                    <div className="stats-bar">
                                        <div
                                        className="stats-fill"
                                        style={{
                                        width: `${(pokemonDetails.stats?.[1].base_stat / 150) * 100}%`,
                                        backgroundColor: '#921212'
                                        }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>Defense: {pokemonDetails.stats?.[2].base_stat}</p>
                                    <div className="stats-bar">
                                        <div
                                        className="stats-fill"
                                        style={{
                                        width: `${(pokemonDetails.stats?.[2].base_stat / 150) * 100}%`,
                                        backgroundColor: '#0000FF'
                                        }}
                                    />
                                    </div>
                                </div>
                                <div>
                                    <p>Speed: {pokemonDetails.stats?.[5].base_stat}</p>
                                    <div className="stats-bar">
                                        <div
                                        className="stats-fill"
                                        style={{
                                        width: `${(pokemonDetails.stats?.[5].base_stat / 150) * 100}%`,
                                        backgroundColor: '#FFFF00'
                                        }}
                                    />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    <hr />
                    
                    <div className="otherdates">
                        <div className="habilities">
                            <div className="habilitiestitle">
                                <h3>Habilities</h3>
                            </div>
                            
                            <ul>
                                {
                                    pokemonDetails.abilities?.map(print=>(
                                        <li key={print.ability?.url}>{print.ability?.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className="moves">
                            <h3>Moves</h3>
                            <ul className="container__move">
                                {
                                    pokemonDetails.moves?.map(print=>(
                                        <li key={print.move?.url}>{print.move?.name}</li>
                                    ))
                                }
                            </ul>
                            
                        </div>
                    </div>
                    
                </div>
                
            </main>
        </>
        
    )
}
export default PokemonDetails;