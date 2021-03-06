import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppComponent}        from './app.component';
import {IbingMaterialModule} from './ibing-material/ibing-material.module';

import {AppRoutingModule} from './app-routing.module';
import {AboutComponent}   from './about/about.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IbingMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
