import {BrowserModule}     from '@angular/platform-browser';
import {NgModule}          from '@angular/core';
import {NgxCarouselModule} from 'ngx-carousel';

import {AppComponent}        from './app.component';
import {IbingMaterialModule} from './ibing-material/ibing-material.module';

import {AppRoutingModule}  from './app-routing.module';
import {AboutComponent}    from './about/about.component';
import {HeaderComponent}   from './shared/components/header/header.component';
import {CarouselComponent} from './carousel/carousel.component';
import 'hammerjs';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    CarouselComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    IbingMaterialModule,
    AppRoutingModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
