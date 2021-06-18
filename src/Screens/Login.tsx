import React, { useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../Redux/authReducer'
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
                .init({ client_id: '529458314439-788b4lpbh90hb3q6lpr22klopfj36ou8.apps.googleusercontent.com' })
                .then(_onInit, _onError)
        })

        return () => {
            // signOutWithGoogle()
            // signOutWithFacebook()
        }
    },[])

    const signInWithGoogle = async () => {
        //@ts-ignore
        const authGoogle = await window?.gapi?.auth2?.getAuthInstance()

        const userData = await authGoogle.signIn()
        const profile = await userData.getBasicProfile()

        const authUser = {
            name: profile.getName()
        }

        dispatch(authActions.setAuthUserSuccess(authUser))
        dispatch(authActions.setAuthSuccess(true))
    }

    const signOutWithGoogle = async () => {
        //@ts-ignore
        const authGoogle = await window?.gapi?.auth2?.getAuthInstance()

        await authGoogle?.signOut()
        dispatch(authActions?.setAuthSuccess(false))
    }

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
