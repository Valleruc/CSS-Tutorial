import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit() {
    
  }

  navSlide(){
    let nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active');
  }
}
