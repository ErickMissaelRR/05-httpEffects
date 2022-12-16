import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as userActions from "../actions";

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private userService: UserService) { }

    loadUser$ = createEffect( 
        () => this.actions$.pipe(
            ofType( userActions.loadUser ),
            //tap( data => console.log('effect', data)),
            mergeMap(
                ( action ) => this.userService.getUserById( action.id )
                .pipe(
                    //tap( data => console.log('getUser', data))
                    map( user => userActions.loadingUserSuccess({ user })),
                    catchError( error => of(userActions.loadingUserError({payload: error})))
                )
            )
        )
     );
}