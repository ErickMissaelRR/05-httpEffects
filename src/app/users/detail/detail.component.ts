import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user,model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  user !: any;

  constructor( private route: ActivatedRoute, private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select('user').subscribe( ({user}) => {
      this.user = user;
    })

    this.route.params.subscribe(({id}) => {
      console.log(id);
      this.store.dispatch( loadUser({id}) )
    })
  }

}
