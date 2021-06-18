export const signInWithGoogle = async () => {
    //@ts-ignore
    const authGoogle = await window?.gapi?.auth2?.getAuthInstance()

    const userData = await authGoogle.signIn()
    const profile = await userData.getBasicProfile()

    return {
        name: profile.getName()
    }
}

export const signOutWithGoogle = async () => {
    //@ts-ignore
    const authGoogle = await window?.gapi?.auth2?.getAuthInstance()
    await authGoogle?.signOut()
}