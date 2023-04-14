import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from '../utils/material.barrel'

@NgModule({
  // dont need imports <= nothing in module
  exports: [
    ...MATERIAL_MODULES // <= imports:[MaterialModule]
  ]
})
export class MaterialModule { }
