import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // public todos: any[]; // undefined
  // shurtcut constructor => ctor tab 
  // public todos: any[] = []; // []
  public todos: Todo[] = []; // []
  public form: FormGroup;
  public title: String = 'Minhas Tarefas';
  public mode: String = 'list';

  constructor(private _formBuilder: FormBuilder) {

    this.form = this._formBuilder.group({
      description: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.load();

    // this.todos.push(new Todo(1, 'Comprar pão', false));
    // this.todos.push(new Todo(2, 'Fazer seguro', true));
    // this.todos.push(new Todo(2, 'Cortar cabelo', false));
    // this.todos.push('Comprar pão');
    // this.todos.push( {message: 'T1000'} );
    // this.todos.push( new Date() );
    // this.todos.push(1989);
    // this.todos.push(10.98920);
  }

  ngOnInit() {
  }

  add() {
    // let dadosForm = this.form.value; // { description: 'description'}
    let description = this.form.controls['description'].value;
    let id = this.todos.length + 1;
    this.todos.push(new Todo(id, description, false));
    this.save();
    this.clear();
  }


  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }


  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }


  remove(todo: Todo) {
    let index = this.todos.indexOf(todo);
    let pressConfirm = confirm('Tem certeza que deseja excluir ?');
    if (index !== -1 && pressConfirm) {
      this.todos.splice(index, 1);
      this.save();
      console.log(index + ' Removido ' + pressConfirm);
    }
  }


  private clear() {
    this.form.reset();
  }


  // Usando localStorage
  save() {
    let data = JSON.stringify(this.todos); // Json to string
    localStorage.setItem('todos', data);
    this.mode = 'list';
  }


  load() {
    let data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data); // string to json
    }
  }


  changeMode(mode: String) {
    this.mode = mode;
  }

}