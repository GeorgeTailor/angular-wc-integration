import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	options = [
		{
			id: 1,
			firstName: 'firstName',
			lastName: 'lastName'
		}
	]

	submit(e: any) {
		e.preventDefault();
		e.target.checkValidity();
	}
}
