import {BrowserModule}     from '@angular/platform-browser';
import {NgModule}          from '@angular/core';
import {NgxCarouselModule} from 'ngx-carousel';
import {AppComponent}      from './app.component';
import {AppRoutingModule}  from './app-routing.module';
import {AboutComponent}    from './about/about.component';
import {CarouselComponent} from './carousel/carousel.component';
import 'hammerjs';
import {CoreModule}        from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCarouselModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
