import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonSevice } from '../person.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  persons = [];

  constructor(personService: PersonSevice) {
    this.persons = personService.getPersons();
  }

  ngOnInit(): void {}
}
