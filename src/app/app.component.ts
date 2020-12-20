import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	form: FormGroup;
	options = [
		{
			firstName: 'firstName',
			lastName: 'lastName'
		}
	]

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.form = this.fb.group({
			select: ['', Validators.required],
			input: ['', Validators.required]
		}, {});
	}

	submit(e: any) {
		e.preventDefault();
		e.target.checkValidity();
	}
}
