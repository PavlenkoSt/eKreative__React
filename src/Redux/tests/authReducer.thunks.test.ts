import { authActions } from './../authReducer';
import { signInWithFacebook, signInWithGoogle } from "../../API/auth"
import { authorizing } from "../authReducer"

jest.mock('../../API/auth')
const mockedSignInWithFacebook = signInWithFacebook as jest.Mocked<typeof signInWithFacebook>
const mockedSignInWithGoogle = signInWithGoogle as jest.Mocked<typeof signInWithGoogle>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

describe('authReducer thunks', () => {
    it('authorizing thunk with signInWithFacebook', async () => {
        const response = {
            name: 'name'
        }

        const thunk = authorizing(response, 'facebook')
    
        //@ts-ignore
        mockedSignInWithFacebook.mockReturnValue(Promise.resolve(response))
    
        await thunk(dispatchMock, getStateMock, {})
    
        expect(dispatchMock).toBeCalledTimes(2)
        expect(dispatchMock).toHaveBeenCalledWith(authActions.setAuthSuccess(true))
        expect(dispatchMock).toHaveBeenCalledWith(authActions.setAuthUserSuccess(response))
    })

    it('authorizing thunk with signInWithGoogle', async () => {
        const response = {
            name: 'name'
        }

        const thunk = authorizing(response, 'google')
    
        //@ts-ignore
        mockedSignInWithGoogle.mockReturnValue(Promise.resolve(response))
    
        await thunk(dispatchMock, getStateMock, {})
    
        expect(dispatchMock).toBeCalledTimes(2)
        expect(dispatchMock).toHaveBeenCalledWith(authActions.setAuthSuccess(true))
        expect(dispatchMock).toHaveBeenCalledWith(authActions.setAuthUserSuccess(response))
    })
})