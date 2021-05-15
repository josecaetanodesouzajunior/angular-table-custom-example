import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PTableComponent } from './p-table/p-table.component';
import { PrimeTemplateDirective } from './prime-template.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PTableComponent,
    PrimeTemplateDirective
  ],
  exports: [PrimeTemplateDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
