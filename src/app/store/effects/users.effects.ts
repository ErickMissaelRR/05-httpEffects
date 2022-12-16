import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as userActions from "../actions";

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions, private userService: UserService) { }

    loadUsers$ = createEffect( 
        () => this.actions$.pipe(
            ofType( userActions.loadUsers ),
            //tap( data => console.log('effect', data)),
            mergeMap(
                () => this.userService.getUsers()
                .pipe(
                    //tap( data => console.log('getUser', data))
                    map( users => userActions.loadingUsersSuccess({ users })),
                    catchError( error => of(userActions.loadingUsersError({payload: error})))
                )
            )
        )
     );
}