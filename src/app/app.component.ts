import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  message:string="";
  display(val:string):void{
    this.message=val
  }
  message1:string="Welcome";
  chk:boolean=true;
  
}
