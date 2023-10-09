import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { addItems } from '../item.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
})
export class ModalComponent {
  @Input() onClose: any;
  formItem: FormGroup = new FormGroup({
    username: new FormControl(undefined),
    password: new FormControl(undefined),
  });
  modalOpen = false;
  submittedForm = false;
  loadingForm = false;
  dataResponse = {
    error: false,
    data: undefined,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formItem = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formItem.controls;
  }

  onSubmit(): void {
    this.submittedForm = true;
    this.loadingForm = true;
    this.dataResponse.error = false;
    addItems(this.formItem.value)
      .then((res) => {
        this.dataResponse = res?.data;
        this.onClose();
      })
      .catch((error) => {
        this.dataResponse = error?.data;
      })
      .finally(() => {
        this.loadingForm = false;
        this.submittedForm = false;
        this.modalOpen = false;
      });
  }
}
