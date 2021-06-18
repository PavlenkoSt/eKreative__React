import './App.css'
import { Route } from 'react-router-dom'
import Login from './Screens/Login'

const App = () => {
  return (
    <div>
      <Route path='/login' component={Login}/>
    </div>
  )
}

export default App;
