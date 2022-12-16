import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user,model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { UsersState } from 'src/app/store/reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
      .card {
        width: 18rem;
        margin-top: 2rem;
      }

      .card-columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
        margin-bottom: 2rem;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  usersList: User[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.select('users').subscribe( (res) => {
      this.usersList = res.users;
      this.loading = res.loading,
      this.error = res.error;
    })

    this.store.dispatch( loadUsers() );

    // this.user.getUsers().subscribe((users) => {
    //   console.log(users);
    //   this.users = users;
    // }
    // );
  }
}
