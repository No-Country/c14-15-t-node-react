import { Outlet, Navigate } from "react-router-dom"
import { useSelector} from "react-redux"

const PrivateRoute = () => {


  const { user, token } = useSelector((state) => state.authv)
  console.log(user)
if ( user & token) {
  
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