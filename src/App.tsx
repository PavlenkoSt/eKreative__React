import './App.css'
import { Route } from 'react-router-dom'
import Login from './Screens/Login'
import Header from './Components/Header'

const App = () => {
  return (
    <>
      <Header/>
      <Route path='/login' component={Login}/>
    </>
  )
}

export default App;
