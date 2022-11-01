import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from 'src/app/Services/data/todo-data.service';

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

  todos:Todo[]
  message:string
 
  // = [
  //   new Todo(1,'learn to dance',false,new Date()),
  //   new Todo(2,'Expert at Angular',false,new Date()),
  //   new Todo(1,'Visit India',false,new Date()),

  //   // {id :1, description : 'learn to dance'},
  //   // {id :2, description : 'beacome an expert at angular'},
  //   // {id :3, description : 'visit India'}
  // ]

  // todo ={
  //   id:1,
  //   description: 'learn to Dance'
  // }

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  // ngOnInit(): void {
  // this.todoService.retrieveAllTodos('chandu').subscribe
  //   (response => {console.log(response);
  //   this. todos= response;
  // }) 
  // }

  ngOnInit(): void {
    this.refreshTodos();
  }
refreshTodos(){
this.todoService.retrieveAllTodos('chandu').subscribe
      (response => {console.log(response);
      this. todos= response;
    })
    }
deleteTodo(id){
  console.log(`delete todo ${id}` )
  this.todoService.deleteTodo('chandu',id).subscribe(
    response => {
      console.log(response);
      this.message=`Delete of Todo ${id} Successful !!`
      this.refreshTodos();
    }
  )

}
UpdateTodo(id){
  console.log(`update ${id}`)
  this.router.navigate(['todos',id])
}
addTodo(){
  this.router.navigate(['todos',-1])

}

}
