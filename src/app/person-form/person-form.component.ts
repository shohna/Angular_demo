import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonSevice } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  personService: PersonSevice;
  constructor(personService: PersonSevice) {
    this.personService = personService;
  }

  ngOnInit(): void {}

  onSubmitForm(personForm: NgForm) {
    let person = new Person(
      personForm.value.id,
      personForm.value.name,
      personForm.value.address
    );
    this.personService.addPerson(person);
  }
}
