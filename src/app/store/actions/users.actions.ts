import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user,model";

export const loadUsers = createAction('[Users] Upload Users');
export const loadingUsersSuccess = createAction('[Users] Upload Users Success', props<{users: User[]}>());
export const loadingUsersError = createAction('[Users] Upload Users Error', props<{payload: any}>());