import { Outlet, Navigate } from "react-router-dom"
import { useSelector} from "react-redux"

const PrivateRoute = () => {


  const {  userToken } = useSelector((state) => state.authv)

if (  userToken) {
  
  return  <Outlet /> 
}
else{
  return <Navigate to='/login' replace />
  
}

  //   const { user } = useSelector((state) => state.auth)
  //   console?.log(user)
  // return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute  