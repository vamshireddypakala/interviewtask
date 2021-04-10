import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showLogoClass: boolean = false
  showLogo: boolean = true
  showRobot: boolean = false
  constructor(private router: Router) { }
  openE1() {
    this.router.navigate([''])
  }
  ngOnInit(): void {
  }
  openLogo() {
    this.showLogoClass = true
    setTimeout(() => {
      this.showLogo = false
      this.showRobot = true
    }, 500)

  }
}
