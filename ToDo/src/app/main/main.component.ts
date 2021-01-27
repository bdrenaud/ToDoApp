import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
toDoItem: any;
toDoList: any;
entryForm = new FormGroup({ 
  entryValue: new FormControl('')
})


  constructor() { }

  ngOnInit(): void {
    this.toDoList = new Array();
    this.entryForm.reset();
    this.entryForm.controls["entryValue"].setValue("");

  }

  addToList(){
    const task = {
      id: Math.floor(Math.random() * (10000 -1) + 1),
      title: this.entryForm.controls["entryValue"].value,
      completed: false
    }
    this.toDoList.push(task);
    console.log(this.toDoList);
    this.entryForm.reset();
    this.entryForm.controls["entryValue"].setValue("");
  }

  remove(id){
    var index = this.toDoList.findIndex(x => x.id == id)
    if (index != -1){
      this.toDoList.splice(index, 1)
    }
  }

}
