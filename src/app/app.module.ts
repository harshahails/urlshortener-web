import { ShorturlService } from './shorturl.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShorturlComponent } from './shorturl/shorturl.component';

@NgModule({
  declarations: [
    AppComponent,
    ShorturlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    ShorturlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
