export const signInWithFacebook = (response: any) => {
    return {
        name: response.name,
    }
}

export const signInWithGoogle = (response: any) => {
    return {
        name: response.profileObj.name,
    }
}