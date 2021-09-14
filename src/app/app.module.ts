import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import * as zooComponents from  '@zooplus/zoo-web-components';
zooComponents.registerComponents(zooComponents);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
