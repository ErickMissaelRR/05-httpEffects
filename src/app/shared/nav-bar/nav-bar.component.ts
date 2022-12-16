import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  id !: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUser(id: string){
    
    if(!id) return;

    this.id = id;
    this.router.navigateByUrl(`user/${id}`)

  }

}
