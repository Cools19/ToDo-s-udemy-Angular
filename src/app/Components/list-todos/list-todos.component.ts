import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description:string,
    public done : boolean,
    public targetDate: Date

  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos =[
    new Todo(1,'learn to dance',false,new Date()),
    new Todo(2,'Expert at Angular',false,new Date()),
    new Todo(1,'Visit India',false,new Date()),

    // {id :1, description : 'learn to dance'},
    // {id :2, description : 'beacome an expert at angular'},
    // {id :3, description : 'visit India'}
  ]

  // todo ={
  //   id:1,
  //   description: 'learn to Dance'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
