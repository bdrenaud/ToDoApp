import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
toDoItem: any;
toDoList: any;
entry: string;

  constructor() { }

  ngOnInit(): void {
    this.toDoList = new Array();
    this.entry = '';
  }

  addToList(text){
    if(text !== ''){
    const task= {
      title: text,
      completed:false
    }
    this.toDoList.push(task)
    this.entry= null;
  }
    else {
      alert('Enter Task!')
    }
   
  }

}
