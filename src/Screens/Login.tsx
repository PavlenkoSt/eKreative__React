import React, { FC, useState } from 'react'
import FacebookLogin from 'react-facebook-login'

const Login: any = () => {
    const [login, setLogin] = useState(false)
    const [data, setData] = useState({})
    // const [picture, setPicture] = useState('')
  
    const responseFacebook = (response: any) => {
      console.log(response);
      setData(response);
    //   setPicture(response.picture.data.url);
      if (response.accessToken) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    }
  
    return (
       <>
        <FacebookLogin 
            appId={'211002797537988'}
            callback={responseFacebook}
        />
        { !login && <div>1</div> }
        { login && <div>2</div> }

        {/* @ts-ignore */}
        { login && data.name && data.email && <div>hola</div> }
       </>
    )
}

export default Login
