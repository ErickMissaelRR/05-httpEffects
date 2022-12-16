import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user,model";

export const loadUser = createAction('[User] Upload User', props<{id: string}>());
export const loadingUserSuccess = createAction('[User] Upload User Success', props<{user: User}>());
export const loadingUserError = createAction('[User] Upload User Error', props<{payload: any}>());