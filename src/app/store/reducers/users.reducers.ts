import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user,model";
import { loadingUsersError, loadingUsersSuccess, loadUsers } from "../actions";

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

const userInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}   

const _usersReducer = createReducer(
    userInitialState,
    on(loadUsers, state => ({ ...state, loading: true })),
    on(loadingUsersSuccess, (state, {users}) => ({ ...state, loading: false, loaded: true, users: [...users] })),
    on(loadingUsersError, (state, {payload}) => ({ ...state, loading: false, loaded: false, error: { url: payload.url, name: payload.name, message: payload.message} })),
);

export function usersReducer(state: UsersState = userInitialState, action: Action) {
    return _usersReducer(state, action);
}