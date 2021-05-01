import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  resultado =0;
  a=0;
  b=0;

  sumar():void{
    this.resultado=this.a+this.b;
  }
  restar():void{
    this.resultado=this.a-this.b;
  }
  multiplicar():void{
    this.resultado=this.a*this.b;
  }
}
