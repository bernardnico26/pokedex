import { Outlet } from "react-router-dom"
import Pokemon from "../Components/Pokemon"
import { useDispatch } from "react-redux"
import { setShowHeader } from "../store/slice/printHeader"

const Pokedex = ({changePage, dataPokemon, change, url})=>{
    const dispacth = useDispatch()
    let data
    if(change==1){
        data = dataPokemon.results?.map(data =>{ return data.url})
        dispacth( setShowHeader(true))
    }else if(change==2) {
        data= dataPokemon.pokemon?.map(data=>{return data.pokemon.url})
        dispacth( setShowHeader(true))
    }else if(change==3){
        data =[url]
        dispacth( setShowHeader(true))
    }

    return(
        <main>
            <Outlet/>
            <button 
                onClick={()=>changePage(dataPokemon?.previous)} 
                className={`changePage previous ${dataPokemon?.previous==null?"null":""}`}
            >
                <i className='bx bx-caret-left caretbutton'></i>
            </button>
            <div className="pokemon__container">
                {
                    data?.map(print=>(
                    <Pokemon key={print} url={print}/>
                    ))
                }
            </div>
            <button 
                onClick={()=>changePage(dataPokemon?.next)} 
                className={`changePage next ${dataPokemon?.next==null?"null":""}`}
            >
                <i className='bx bx-caret-right caretbutton'></i>
            </button>
        </main>
        
    )
}
export default Pokedex