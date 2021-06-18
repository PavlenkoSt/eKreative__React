import React, { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login'

const Login: any = () => {
    const [login, setLogin] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        const _onInit = (auth2: any) => {
            console.log('init OK', auth2)
        }
        const _onError = (err: any) => {
            console.log('error', err)
        }
        //@ts-ignore
        window.gapi.load('auth2', function() {
            //@ts-ignore
            window.gapi.auth2
                .init({ client_id: '529458314439-788b4lpbh90hb3q6lpr22klopfj36ou8.apps.googleusercontent.com' })
                .then(_onInit, _onError)
        })
    },[])

    const signIn = () => {
        //@ts-ignore
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then((googleUser: any) => {
            const profile = googleUser.getBasicProfile()
            console.log('ID: ' + profile.getId())
            console.log('Full Name: ' + profile.getName())
            console.log('Given Name: ' + profile.getGivenName())
            console.log('Family Name: ' + profile.getFamilyName())
            console.log('Image URL: ' + profile.getImageUrl())
            console.log('Email: ' + profile.getEmail())
        
            const id_token = googleUser.getAuthResponse().id_token
            console.log('ID Token: ' + id_token)
        })
      }
      const signOut = () => {
        //@ts-ignore
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut().then(function() {
            console.log('User signed out.')
        })
      }

    const responseFacebook = (response: any) => {
        console.log(response);
        setData(response);
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
        <button onClick={signIn}>Login Google</button>
        { !login && <div>1</div> }
        { login && <div>2</div> }

        {/* @ts-ignore */}
        { login && data.name && data.email && <div>hola</div> }
       </>
    )
}

export default Login
