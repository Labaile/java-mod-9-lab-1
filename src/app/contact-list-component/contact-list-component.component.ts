import { Component, OnInit } from '@angular/core';

//imports User models
import{ User } from "../user.model";

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css']
})
export class ContactListComponentComponent implements OnInit {

  users: User[] = [
    { firstName: "Aurelie" },
    { firstName: "James" },
    { firstName: "Jessica" },
    { firstName: "Ludovic" },
    { firstName: "Maria" },
    { firstName: "LaToya"},
  ];

  constructor() { 
    console.log("displaying all users");
    this.users.map((user: User) => console.log(user.firstName));
  }

  ngOnInit(): void {
  }

}
