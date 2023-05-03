import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/moments';
@Component({
  selector: 'app-moments-forms',
  templateUrl: './moments-forms.component.html',
  styleUrls: ['./moments-forms.component.css']
})
export class MomentsFormsComponent implements OnInit {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Moment>();
  momentForm!: FormGroup;
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.minLength(6)]),
      image: new FormControl('')
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.momentForm.value);
  }
}
