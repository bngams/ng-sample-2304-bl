import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from '../utils/material.barrel'

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ...MATERIAL_MODULES // <= imports:[MaterialModule]
  ]
})
export class MaterialModule { }
