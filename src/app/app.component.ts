import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  products1: any[] = [
    { code: 123, name: 'Notebook', category: 'eletronics', quantity: 234 }
  ];
}
