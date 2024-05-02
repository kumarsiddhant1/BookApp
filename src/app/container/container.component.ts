import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  book = {
    title  : "Classical Mythology",
    author  : "Mark P. O. Morford",
    pub_year : 2002,
    publisher : "Oxford University Press",
    pImg : "../../assets/image/classicalmyth.jpg"
  }
  name : string = "john"

  onNameChange(event:any){
    this.name = event.target.value;
  }
}
