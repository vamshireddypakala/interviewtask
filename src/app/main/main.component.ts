import { Component, OnInit ,HostListener} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }
  openE4() {
    this.router.navigate(['/home'])
  }
  getData: any
  namer = 'Angular 8';
  timeLeft: number = 9;
  interval: any;
  clicked: boolean = false
  givenArray = ['A', 'BB', '10', 'CCC', 'DDDD', '20', 'EEEEE', 'FFFFFF', '30']
  Array: any = []
  public type: number = 0; public machineName: string = ''
 
  baseColor = ''
  get name(): string {
    let machineName = '';
    if (this.machineName == null || this.machineName == '' || this.machineName == undefined) {
      switch (this.type) {
        case 0:
          machineName = 'bulldozer'
          break;
        case 1:
          machineName = 'crane'
          break;
        case 2:
          machineName = 'tractor'
          break;
        case 3:
          machineName = 'truck'
          break;
        case 4:
          machineName = 'car'
          break;
      }
    }
    return machineName;
  }

  get description(): string {
    let hasMaxSpeed = true;
    switch (this.type) {
      case 1 || 2:
        hasMaxSpeed = true
        break;
      case 3 || 4:
        hasMaxSpeed = false
        break;
    }
    let description = '' + ' ' + this.color + ' ' + this.name + ' ' + '[' + this.getMaxSpeed(this.type, hasMaxSpeed) + '].';
    return description;
  }

  get color(): string {
    let color = 'white';
    this.baseColor = 'white';
    switch (this.type) {
      case 0:
        color = 'red'
        this.baseColor = 'red'
        break;
      case 1:
        color = 'blue'
        this.baseColor = 'blue'
        break;
      case 2:
        color = 'green'
        this.baseColor = 'green'
        break;
      case 3:
        color = 'yellow'
        this.baseColor = 'yellow'
        break;
      case 4:
        color = 'brown'
        this.baseColor = 'brown'
        break;
    }
    return color;
  }

  get trimColor(): string {
    // unable to refactor this as we calling the function
    let trimColor = '';
    if (this.type == 1 && this.isDark(this.baseColor)) trimColor = 'black';
    else if (this.type == 1 && !this.isDark(this.baseColor)) trimColor = 'white';
    else if (this.type == 2 && this.isDark(this.baseColor)) trimColor = 'gold';
    else if (this.type == 3 && this.isDark(this.baseColor)) trimColor = 'silver';
    return trimColor;
  }

  isDark(color: string) {
    let isDark = false;
    switch (color) {
      case 'red' || 'green' || 'black' || 'crimson':
        isDark = true
        break;
      case 'yellow' || 'white' || 'beige' || 'babyblue':
        isDark = false
        break;
    }
    return isDark;
  }

  getMaxSpeed(machineType: any, noMax = false) {
    let absoluteMax = 70;
    let max = 70;
    // unable to refactor this as we 2 conditions to check

    if (machineType == 1 && !noMax) max = 70;
    else if (!noMax && machineType == 2) max = 60;
    else if (machineType == 0 && noMax == true) max = 80;
    else if (machineType == 2 && noMax == true) max = 90;
    else if (machineType == 4 && noMax == true) max = 90;
    else if (machineType == 1 && noMax == true) max = 75;
    return max;
  }
  ngOnInit() {
    // Excercise 2 starts from here
    // this.getData = this.globalSharedService.customizeCard$.subscribe(
    //   data => {
    //     if (data) {
    //      let response = data
    //     }
    //   });

    // setTimeout(()=>{
    //   if(this.getData != undefined)
    //   this.getData.unsubscribe();
    // },15000)
    // Excercise 2 ends from here

  }
  @HostListener('window:click', ['$event'])
  onClick(event: any) {
    console.log(this.clicked)
    this.clicked = !this.clicked
    if (this.clicked) {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          let pushingText = ''
          if (this.timeLeft == 8) {
            pushingText = 'A'
          }
          if (this.timeLeft == 7) {
            pushingText = 'BB'
          } if (this.timeLeft == 6) {
            pushingText = '10'
          } if (this.timeLeft == 5) {
            pushingText = 'CCC'
          } if (this.timeLeft == 4) {
            pushingText = 'DDDD'
          } if (this.timeLeft == 3) {
            pushingText = '20'
          } if (this.timeLeft == 2) {
            pushingText = 'EEEEE'
          }
          if (this.timeLeft == 1) {
            pushingText = '30'
            this.Array.push('FFFFFF')

          }
          this.Array.push(pushingText)
        } else {
          this.timeLeft = 0;
        }
      }, 1000)
    }
    else if (!this.clicked) {
      clearInterval(this.interval);
    }
  }


  ngOnDestory() {
    this.interval.unsubscribe()
  }

}
