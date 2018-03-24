import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {MatListModule} from '@angular/material';

const components = [
  MatListModule
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [components]
})
export class IbingMaterialModule {
}
