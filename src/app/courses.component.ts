import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',//automatically (line 6)updates title to what ever the value of variable title is below
    template: `
    <h2>{{ getTitle() }}</h2>
     <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>                  
    `
    //string interpolation
})


export class CoursesComponent{
    title="List of Courses";
    courses:any;
    constructor(service: CoursesService){//when using this in the constructor declaration please remember to update providers in app.module
        // let service= new CoursesService();(this is not preffered instead we do the above in the constructor declaration)
        this.courses = service.getCourses();
    }
    getTitle(){
        return this.title;
    }
    //logic for calling HTTP endpoint service

    
}