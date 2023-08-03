import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'


const ProtectedRouter=()=>{
    const name = useSelector(state => state.coachName)
    if( name?.length > 0 ){
        return <Outlet />
    }else{
        return <Navigate to="/"/>
    }
}
export default ProtectedRouter