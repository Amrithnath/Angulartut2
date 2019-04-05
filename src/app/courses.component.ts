import { Component } from '@angular/core';

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
    courses;
    getTitle(){
        return this.title;
    }
    //logic for calling HTTP endpoint service

    
}