# Integrating Angular project with zoo-web-components

## Setup

1. Run `npm i @zooplus/zoo-web-components --save` to install the package.
2. Modify you main `app.module.ts` and add the following line: `import "../../node_modules/@zooplus/zoo-web-components/dist/zoo-components-esm.js";`
3. Modify your NgModule declaration so that it knows how to treat unknown HTML tags:
```
@NgModule({
	declarations: [
		...
	],
	imports: [
    ...
	],
  ...
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
```
4. Use web components in your application:
```
<zoo-header imgsrc="assets/logo.png" headertext="Zoo web components in Angular"></zoo-header>

<form class="form" [formGroup]="form" (ngSubmit)="submit(form)">
	<zoo-select valid="{{!form.controls.select.touched || form.controls.select.valid ? 1 : ''}}" 
		inputerrormsg="Name is required" labeltext="Name">
		<select formControlName="select" slot="selectelement">
			<option *ngFor="let option of options" [value]="option.id">{{ option.firstName }} {{ option.lastName }}</option>
		</select>
	</zoo-select>
	<zoo-input valid="{{!form.controls.input.touched || form.controls.input.valid ? 1 : ''}}" 
		labeltext="Input date field" 
		inputerrormsg="Invalid value" 
		infotext="Information text">
		<input formControlName="input" type="date" placeholder="Placeholder" slot="inputelement"/>
	</zoo-input>
	<zoo-button class="submit-button" size="small" (click)="submit(form)">
		<button type="button">Submit</button>
	</zoo-button>
</form>
```
