import './App.css'
import { Route, Redirect } from 'react-router-dom'
import Login from './Screens/Login'
import Header from './Components/Header'
import { authSelector } from './Redux/selectors/authSelector'
import { useSelector } from 'react-redux'
import videoList from './Screens/videosList'

const App = () => {
  const auth = useSelector(authSelector)
  
  return (
    <>
      <Header/>
      {!auth && <Redirect to='/login'/>}
      <Route path='/login' component={Login}/>
      <Route path='/videosList' component={videoList}/>
    </>
  )
}

export default App;
