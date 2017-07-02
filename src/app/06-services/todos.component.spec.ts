
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
//import * as _ from 'lodash';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {

    service = new TodoService(null); //manoeuvring with null to avoid http object creation and setup
    component = new TodosComponent(service);
  });

  it('should set todos to the value returned by server via todo service', () => {
    //here wee are spuing on method getTodos of TodoService, callFake takes the function
    //it's faking on. We are getting control over the function we are faking
    //Arrange
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });


    //Act
    component.ngOnInit();

    //Assert
    //expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos); //more specific assertion
  });

  it('should call the server and save the new todo given to it', () => {
    //here wee are spuing on method getTodos of TodoService, callFake takes the function
    //it's faking on. We are getting control over the function we are faking
    //Arrange
    let spy = spyOn(service, 'add').and.callFake(todo => {
      return Observable.empty();
    });


    //Act
    component.add();

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  it('should add the todo returned from service add method', () => {
    //here wee are spuing on method getTodos of TodoService, callFake takes the function
    //it's faking on. We are getting control over the function we are faking
    //Arrange
    let todo = { id: 1 };
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    //Act
    component.add();

    //Assert

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set message to error message from server', () => {
    //here wee are spuing on method getTodos of TodoService, callFake takes the function
    //it's faking on. We are getting control over the function we are faking
    //Arrange
    let error = "error from server";
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    //Act
    component.add();

    //Assert
    expect(component.message).toBe(error);
  });

  it('should call delete method of service when user confirms the window confirm popup', () => {
    //here wee are spuing on method getTodos of TodoService, callFake takes the function
    //it's faking on. We are getting control over the function we are faking
    //Arrange
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    //Act
    component.delete(10);

    //Assert
    expect(spy).toHaveBeenCalledWith(10);
  });

  it('should NOT call delete method of service when user confirms the window confirm popup', () => {
    //here wee are spuing on method getTodos of TodoService, callFake takes the function
    //it's faking on. We are getting control over the function we are faking
    //Arrange
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    //Act
    component.delete(10);

    //Assert
    expect(spy).not.toHaveBeenCalled();
  });

});