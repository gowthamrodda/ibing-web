import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {IbingMaterialModule} from '../ibing-material/ibing-material.module';
import {HeaderComponent}     from './header/header.component';
import {WelcomeComponent}    from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    IbingMaterialModule
  ],
  declarations: [WelcomeComponent, HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
}
