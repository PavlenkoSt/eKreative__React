import './App.scss'
import { Route, Redirect } from 'react-router-dom'
import Login from './Screens/Login'
import Header from './Components/Header/Header'
import { authSelector } from './Redux/selectors/authSelector'
import { useSelector } from 'react-redux'
import Videos from './Screens/Videos'
import Video from './Screens/Video'

const App = () => {
  const auth = useSelector(authSelector)
  
  return (
    <>
      <Header/>
      {!auth && <Redirect to='/login'/>}
      <Route path='/login' component={Login}/>
      <Route path={'/videosList'} component={Videos}/>
      <Route path={'/video'} component={Video}/>
    </>
  )
}

export default App;
