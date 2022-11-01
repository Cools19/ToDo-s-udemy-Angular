import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from 'src/app/Services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo: Todo

  constructor(
    private todoService :TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //for date formate 
    //  later i changed -1 to this.id
    this.todo= new Todo(this.id,'',false,new Date());
    if(this.id!=-1){
    this.todoService.retrieveTodo('chandu',this.id)
    .subscribe(
      data => this.todo= data
      )
  }
  }


  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('chandu',this.todo)
    .subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['todos'])
      }
     )
     
      //Create Todo
    }else{
    this.todoService.updateTodo('chandu',this.id,this.todo)
    .subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['todos'])
      }
    )

  }
}

}
