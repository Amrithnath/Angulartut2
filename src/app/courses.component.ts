import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
     <ul>
        <li *ngFor=""></li>
    </ul>                  
    `
    //string interpolation
    //automatically updates title to what ever the value of variable title is below
})


export class CoursesComponent{
    title="List of Courses";
    courses = ["math","Physics","English"];
    getTitle(){
        return this.title;
    }
    
}