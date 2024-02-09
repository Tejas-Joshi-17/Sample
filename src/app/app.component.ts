import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apple-Microsoft';

  constructor(){
    console.log(`App(Root) Component Loaded`)
  }
}
