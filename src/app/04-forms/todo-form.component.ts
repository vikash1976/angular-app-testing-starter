
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

export class TodoFormComponent { 
  form: FormGroup; 
  blacklistedNames = ['11AA', '22BB', '33CC'];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, this.checkBlacklistedNames.bind(this)]],
      email: [''],
    });
  }

  checkBlacklistedNames(control: FormControl): {[key: string]: boolean} {
    if(this.blacklistedNames.indexOf(control.value) !== -1) {
      return {'inBlacklistedName': true};
    }
    return null;
  }
}