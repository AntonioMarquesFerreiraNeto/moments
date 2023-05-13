import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/moments';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-moments-forms',
  templateUrl: './moments-forms.component.html',
  styleUrls: ['./moments-forms.component.css']
})
export class MomentsFormsComponent implements OnInit {

  constructor() {

  }
  @Input() btnText!: string;
  @Input() setMoment: Moment | null = null;
  @Output() onSubmit = new EventEmitter<Moment>();
  momentForm!: FormGroup;
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.setMoment ? this.setMoment.id : ''),
      title: new FormControl(this.setMoment? this.setMoment.title : '', [Validators.required, Validators.minLength(4)]),
      description: new FormControl(this.setMoment? this.setMoment.description : '', [Validators.required, Validators.minLength(6)]),
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
