import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user,model';
import { UserService } from 'src/app/services/user.service';

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
  users: User[] = [];

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}
