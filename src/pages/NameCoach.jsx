import { useState,useEffect } from "react"
import { setEnterName } from "../store/slice/coachName"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { setShowHeader } from "../store/slice/printHeader"
const NameCoach =()=>{

    const [value, setValue ]= useState("")
    const [buttonIcon, setButtonIcon] = useState(true)
    const dispacth = useDispatch("")
    const navigate = useNavigate()
    const setName=(e)=>{
        e.preventDefault();
        dispacth( setShowHeader(true))
        dispacth( setEnterName(value))
        navigate("/Pokedex")
    }
    const changeIcon=(e)=>{
        
        const i = value.length
        
        if ((i+1)>0) {
            setButtonIcon(false)
        }
        if(e==""){
            setButtonIcon(true)
        }
        
    }
    useEffect(()=>{
        dispacth( setShowHeader(false))
        dispacth( setEnterName(""))
    },[])

    return(
            <div className="Home">
                <div className="sesion__container">
                    <div>
                        <h2>Hello trainer <br/> Enter your name to continue {setButtonIcon}</h2>  
                        <img src="/trainers.png" alt="img"/>
                    </div>
                
                    <form onSubmit={e => setName(e) }>
                        <input type="text" placeholder="Enter name" value={value} onChange={e=>{
                            setValue(e.target.value),
                            changeIcon(e.target.value)
                            }}/>
                        <button disabled className={!buttonIcon?"check":"no__check"}>x</button>
                        <button className={buttonIcon?"check":"no__check green" } ><i className='bx bx-check' ></i></button>
                    </form>
                </div>
            </div>
            
    )
}
export default NameCoach;