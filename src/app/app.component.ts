import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: //<h1 [class.red-title]="titleClass">Hey It works</h1>
  //<h1 [ngClass]="titleClasses">Hey It works</h1>
  //<h1 [style.color] = "titleStyle"> Hello </h1>
  //<h1 [style.color] = "titleStyle ? 'green' : 'blue'">Hello</h1>
  `<h1 [ngStyle] = "titleStyles">Hello</h1>
  <ul>`
  	//+<li *ngFor="let arr of myArr"> {{arr}} </li>+
  	//+`<li *ngIf="!myArr"> Array is defined </li>`+
  	//+`<li *ngIf="temp == 'check'"> Condition satisfied </li>`+
  	//+`<li *ngIf="temp == 'check'; else otherTmpl"> Condition satisfied </li>`+
  	+`<li *ngIf="temp == 'check' then tmpl2; else otherTmpl"> Condition satisfied </li>`+
  `</ul>

  <ng-template #tmpl2><ol><li>Condition is satisfied</li></ol></ng-template>

  <ng-template #otherTmpl><ol><li>Condition not satisfied</li></ol></ng-template>

  <button (click)="myEvent($event)">Click</button>
  <button (mouseenter)="myEvent($event)">Enter</button>
  `,
  //<p>{{myObject.gender}}</p>`,
  //<p>{{myObject}}</p>`,
  //<p>Mulitiline inline template</p>`, // Overrides templateURL
  styleUrls: ['./app.component.css']
  styles: [`
  	h1 {
  	  text-decoration:underline;
  	}

  	.red-title {
  	  color:red;
  	}
  	.large-title {
  	 font-size:4em;
  	}
  `]
})
export class AppComponent {
  title = 'app';

  myObject = {
  	gender: 'male',
  	age: 101,
  	location: 'USA'
  };

  myArr = [1,5,10,15];
  temp = 'check';

  myEvent(event) {
  console.log(event);
  }

  //titleClass = 'red-title';
  titleClass = true;

  titleClasses = {
  	'red-title': true,
  	'large-title': true
  }

  //titleStyle = 'blue';
  titleStyle = false;
  titleStyles = {
  	'color' : 'maroon',
  	'font-size' : '6em'
  };

}
