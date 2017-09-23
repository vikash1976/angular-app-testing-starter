import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make name control as required when empty value is set', () => {
    let control = component.form.get('name');
    let value = '';
    control.setValue(value);
    expect(control.valid).toBeFalsy();
  });
  it('should make name control as required when null value is set', () => {
    let control = component.form.get('name');
    let value = null;
    control.setValue(null);
    expect(control.valid).toBeFalsy();
  });
  it('should pass required validation when a valid value is set', () => {
    let control = component.form.get('name');
    let value = 'Vikash';
    control.setValue(value);
    expect(control.valid).toBeTruthy();
  });
  it('should pass blacklisted validation when a valid value is set', () => {
    let control = component.form.get('name');
    let value = 'Vikash';
    control.setValue(value);
    expect(control.valid).toBeTruthy();
  });
  it('should fail blacklisted validation when a blacklisted value is set', () => {
    let control = component.form.get('name');
    let value = '11AA';
    control.setValue(value);
    expect(control.valid).toBeFalsy();
  });
});