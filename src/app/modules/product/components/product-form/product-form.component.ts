import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output()
  productSubmit = new EventEmitter<Product>();

  // productForm = new  UnTypedFormGroup() ...

  // typed Forms => FormGroup { key: AbstractControls<> }
  // custom and generic ControlsOf<T>
  productForm!: FormGroup<ControlsOf<Product>>;

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup<ControlsOf<Product>>({
      title: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      price: new FormControl<number | null>(null, Validators.required),
    });
  }

  submit(): void {
    this.productSubmit.emit(this.productForm.value);
  }
}
