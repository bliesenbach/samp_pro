import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    title: string;
    age: number;
    email: string;
    address: Address;
    hobbies: string[];
    constructor() { }

    ngOnInit() {
      this.title = 'Samp-Pro';
      this.age = 123;
      this.address = {
        street : 'Rhöndorfer Strasse 50',
        city : 'Köln',
        state : 'NRW'
      };
      this.hobbies = ['write code', 'watch movies'];

    }

    clickme() {
      console.log('click');
      this.title = 'HALLO';
      this.hobbies.push('test eintrag');
    }
  }

  interface Address {
    street: string;
    city: string;
    state: string;
  }
