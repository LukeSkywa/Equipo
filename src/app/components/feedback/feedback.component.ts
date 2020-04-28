import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      sesso: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefono: ['', Validators.required],
      commento: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(150)])]
    });
  }

  ngOnInit(): void {
  }

  getFeedback() {
    console.log(this.feedbackForm.value);
  }

}
