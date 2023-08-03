import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowHeader } from "../store/slice/printHeader";

const Pokemon = ({url})=>{
    const [pokemon, setPokemon] = useState([])
    const [no , setNo] = useState(true)
    const navigate = useNavigate()
    const dispacth = useDispatch()
    let coma =""
    useEffect(()=>{
        axios
            .get(url)
            .then(res=>{setPokemon(res.data), setNo(true)})
            .catch(error=>{setNo(false), console.error(error)})
    },[])
    if(pokemon?.types?.length>1){
        coma = ", "
    }
    const details =(id)=>{
        navigate(`/Pokedex/${id}`)
        dispacth( setShowHeader(false))

    }
    if (no) {
        return (
            <div 
                className={`pokemon__card ${pokemon?.types?.[0]?.type.name}`}
                onClick={()=>details(pokemon?.id)}>
                <div className="img">
                    <h3>{pokemon?.name}</h3>
                    <img src={pokemon?.sprites?.other.dream_world.front_default} alt="img" width="200px" />
                </div>
                <div className="stat__container">
                    <div>
                        <p>Type: {pokemon?.types?.[0]?.type.name}{coma}{pokemon?.types?.[1]?.type.name}</p>
                    </div>
                    
                </div>
            </div>
        )
    }else{
        return(
            <div className={`pokemon__card`}>
                <div className="notFound-texts">
                    <h2>¡error!</h2>
                    <h3>not Found</h3>
                </div>
                
                <img src="https://media.tenor.com/aZuxB-dfJlAAAAAC/pokemon-pocket-monsters.gif" alt="" />
            </div> 
        )
    }
    
}
export default Pokemon;