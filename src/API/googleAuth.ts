// @ts-nocheck
export const signInWithGoogle = async () => {
    const authGoogle = await window?.gapi?.auth2?.getAuthInstance()

    const userData = await authGoogle.signIn()
    const profile = await userData.getBasicProfile()

    return {
        name: profile.getName()
    }
}

export const signOutWithGoogle = async () => {
    const authGoogle = await window?.gapi?.auth2?.getAuthInstance()
    await authGoogle?.signOut()
}

export const installGoogleAuth = () => {
    const _onInit = (auth2) => console.log('init OK', auth2)
    const _onError = (err) => console.log('error', err)

    window?.gapi?.load('auth2', () => {
        window?.gapi?.auth2
            .init({ client_id: String(process.env.REACT_APP_GOOGLE_AUTH_API) })
            .then(_onInit, _onError)
    })
}