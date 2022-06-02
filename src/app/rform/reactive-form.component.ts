import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TabService } from '../services/tab/tab.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  xy = new Map()
  isSubmitted = false;
  @Input() public  first_num: string;
  @Input() public  last_num: string;
  @Input() public  step_num: string;
  @Output() public output = new EventEmitter(); 

  constructor( public formBuilder: FormBuilder, private tabService: TabService){
  }
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      firstV: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      lastV: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      step: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
    });
   }
  UpdateFormData(firstV: string, lastV: string, step: string){    
    this.reactiveForm.value.firstV = firstV;
    this.reactiveForm.value.lastV = lastV;
    this.reactiveForm.value.step = step;
  }

  OnSubmit(firstV: string, lastV: string, step: string){
    this.UpdateFormData(firstV, lastV, step);

    let start = parseFloat(this.reactiveForm.value.firstV);
    let end = parseFloat(this.reactiveForm.value.lastV);
    let h = parseFloat(this.reactiveForm.value.step);

    this.xy = this.tabService.getTab(start, end, h);
  
    this.output.emit(this.xy);
  }
  get errorControl() {
    return this.reactiveForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.reactiveForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.reactiveForm.value)
    }
  }

}
