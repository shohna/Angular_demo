import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { DemoComponent } from './demo/demo.component';
import { PersonSevice } from './person.service';
import { courseService } from './course.service';
import { FormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    DemoComponent,
    PersonFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PersonSevice, courseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
