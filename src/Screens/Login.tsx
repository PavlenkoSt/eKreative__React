import React, { useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import { useDispatch, useSelector } from 'react-redux'
import { authActions, googleAuth, googleUnauth } from '../Redux/authReducer'
import { authSelector } from '../Redux/selectors/authSelector'
import { Redirect } from 'react-router'

const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector(authSelector)

    useEffect(() => {
        const _onInit = (auth2: any) => console.log('init OK', auth2)
        const _onError = (err: any) => console.log('error', err)

        //@ts-ignore
        window?.gapi?.load('auth2', function() {
            //@ts-ignore
            window?.gapi?.auth2
                .init({ client_id: String(process.env.REACT_APP_GOOGLE_AUTH_API) })
                .then(_onInit, _onError)
        })
    },[])

    const signInWithGoogle = () => dispatch(googleAuth())
    const signOutWithGoogle = () => dispatch(googleUnauth())

    const signInWithFacebook = (response: any) => {
        const authUser = {
            name: response.name,
        }

        dispatch(authActions.setAuthUserSuccess(authUser))

        if (response.accessToken) {
            dispatch(authActions.setAuthSuccess(true))
        } else {
            dispatch(authActions.setAuthSuccess(false))
        }
    }

    const signOutWithFacebook = () => {
        dispatch(authActions.setAuthSuccess(false))
    }
  
    return (
       <div className='login'>
        <FacebookLogin 
            appId={'211002797537988'}
            callback={signInWithFacebook}
        />
        <button 
            onClick={signInWithGoogle}
            className='login__google'
        >Login with Google</button>
        {auth && <Redirect to='/videosList'/>}
       </div>
    )
}

export default Login
