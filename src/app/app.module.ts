import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import "../../node_modules/@zooplus/zoo-web-components/dist/zoo-components-esm.js";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule
	],
	providers: [],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
