import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user,model";
import { loadingUserError, loadingUserSuccess, loadUser } from "../actions";

export interface UserState {
    id: string,
    user: User | null,
    loaded: boolean,
    loading: boolean,
    error: any
}

const userInitialState: UserState = {
    id: '',
    user: null,
    loaded: false,
    loading: false,
    error: null
}   

const _userReducer = createReducer(
    userInitialState,
    on(loadUser, (state, {id}) => ({ ...state, loading: true, id: id })),
    on(loadingUserSuccess, (state, {user}) => ({ ...state, loading: false, loaded: true, user: {...user }})),
    on(loadingUserError, (state, {payload}) => ({ ...state, loading: false, loaded: false, error: { url: payload.url, name: payload.name, message: payload.message} })),
);

export function userReducer(state: UserState = userInitialState, action: Action) {
    return _userReducer(state, action);
}