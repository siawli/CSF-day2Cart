import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  @Output()
  passItem = new Subject<Item>();

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    return this.fb.group({
      item: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      price: this.fb.control<number>(0, [Validators.required, Validators.min(0.10)]),
      quantity: this.fb.control<number>(10, [Validators.required])
    })
  }
  processForm() {
    const item: Item = this.form.value as Item;
    item.totalPrice = item.price * item.quantity;
    this.passItem.next(item);
    this.form = this.createForm();
  }

}
