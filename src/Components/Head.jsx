import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Head = ({name, changePage, setChange}) => {
    const [typePokemon, setTypePokemon] = useState([])
    const [namePokemon, setNamePokemon] = useState("")
    const [selectOnePokemon, setSelectOnePokemon] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        axios
            .get("https://pokeapi.co/api/v2/type/")
            .then(resp => setTypePokemon(resp.data))
            .catch(error=>console.error(error))
    },[])
    const change =(data)=>{
        changePage(data)
        setSelectOnePokemon(false)
        if (data=="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20") {
            setChange(1)
        } else{
            setChange(2)
        }
    }
    const onePokemon =(name)=>{
        if(name){
            const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
            setChange(3)
            changePage(url)
            setNamePokemon("")
            setSelectOnePokemon(true)
        }
        
    }
    return(

        <header>
            <div className='head'>
                <div>
                    <h2>Welcome to the Pokedex</h2>
                    <h1>Trainer: {name}</h1> 
                </div>
                <img src="/pokeBall.png" alt="img" width="100px"/>
            </div>
            <nav>
                
                <div className='container__search'>
                <button onClick={()=>navigate("/")} className="return">Return</button>
                    <div>
                        <input 
                            type="text" 
                            value={namePokemon} 
                            onChange={e=>setNamePokemon(e.target.value)}
                            placeholder="Search name here"
                        />
                        <button onClick={()=>onePokemon(namePokemon)}><i className='bx bx-search-alt-2' ></i></button>
                    </div>

                    <select
                        onChange={e =>{ 
                            change(e.target.value)
                        }}
                    >   
                        <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20">All pokemon</option>
                        <option disabled={!selectOnePokemon} selected={selectOnePokemon}>One Pokemon</option>
                        {
                            typePokemon.results?.map(print=>(
                                <option key={print.url} value={print.url}>{print.name}</option>
                            ))
                        }
                    </select>
                </div>
            </nav>
            
            
        </header>
  
    )
}
export default Head;