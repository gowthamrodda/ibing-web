import {NgModule}                                        from '@angular/core';
import {CommonModule}                                    from '@angular/common';
import {MatCardModule, MatGridListModule, MatListModule} from '@angular/material';

const components = [
  MatListModule,
  MatGridListModule,
  MatCardModule
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
