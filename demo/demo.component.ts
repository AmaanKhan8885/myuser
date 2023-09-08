import { Component } from '@angular/core';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
myArr = [];

  addittion:any=false;
  subttraction: any=false;
  diviision: any=false;
  multipliication: any=false;
  evenn: any=false;

  //Func
  num1: any;
  num2: any;
  result: any;
  primeNum!: number;
  primeResult!: string;
  

  // add() {
  //   console.log(this.num1);
  //   console.log(this.num2);


  //   this.result = this.num1 + this.num2;
  //  // console.log(this.result);
  //   console.log(this.num1);
  //   console.log(this.num2);

    
    
  // }

  add() {
    this.result = this.num1 + this.num2;
  }

  sub() {
    this.result = this.num1 - this.num2;
  }

  mul() {
    this.result = this.num1 * this.num2;
  }

  div() {
    this.result = this.num1 / this.num2;
  }

  isPrime() {
    let flag = true;

    if (this.primeNum === 1) {
      flag = false;
    } else if (this.primeNum > 1) {
      for (let i = 2; i < this.primeNum; i++) {
        if (this.primeNum % i === 0) {
          flag = false;
          break;
        }
      }
    }

    if (flag) {
      this.primeResult = `${this.primeNum} is a prime number.`;
    } else {
      this.primeResult = `${this.primeNum} is not a prime number.`;
    }
  }
  


  addition(faddy:any){
    this.addittion=faddy
  this.subttraction=false;
    this.diviision=false;
    this.multipliication=false;
    this.evenn=false;
  }
  subtraction(faddy:any){
    this.subttraction=faddy
    this.addittion=false
      this.diviision=false;
      this.multipliication=false;
      this.evenn=false;
  }
  division(faddy:any){
    this.diviision=faddy
    this.subttraction=false
    this.addittion=false
      this.multipliication=false;
      this.evenn=false;
  }
  multiplication(faddy:any){
    this.multipliication=faddy
    this.diviision=false
    this.subttraction=false
    this.addittion=false
      this.evenn=false;
  }
  even(faddy:any){
    this.evenn=faddy
    this.multipliication=false
    this.diviision=false
    this.subttraction=false
    this.addittion=false
  }




}
