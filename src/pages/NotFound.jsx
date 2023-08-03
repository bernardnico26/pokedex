import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setShowHeader } from "../store/slice/printHeader"

const NotFound =()=>{
    const dispacth = useDispatch()
    useEffect(()=>{
        dispacth( setShowHeader(false))

    },[])
    return(
        <section className="notFound-section">
            <div className="notFound">
                <div className="notFound-texts">
                    <h2>¡error!</h2>
                    <h3>not Found</h3>
                </div>
                
                <img src="https://media.tenor.com/aZuxB-dfJlAAAAAC/pokemon-pocket-monsters.gif" alt="" />
            </div>
        </section>
        
        
    )
}
export default NotFound;