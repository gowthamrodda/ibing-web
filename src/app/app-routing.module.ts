import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent}       from './about/about.component';
import {WelcomeComponent}     from './core/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
