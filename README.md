# Integrating Angular project with zoo-web-components

## Setup

1. Run `npm i @zooplus/zoo-web-components --save` to install the package.
2. Modify you main `app.module.ts` and add the following line: `import "@zooplus/zoo-web-components";`
3. Modify your NgModule declaration so that it knows how to treat unknown HTML tags:
```TS
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
```HTML
<zoo-header headertext="Zoo web components in Angular">
  <img slot="img" alt="Zooplus logo" src="assets/logo.png"/>
</zoo-header>

<form class="form" [formGroup]="form" (ngSubmit)="submit(form)">
	<zoo-select invalid="{{form.controls.select.touched && !form.controls.select.valid ? 1 : ''}}" 
		inputerrormsg="Name is required">
		<select id="select-id" formControlName="select" slot="selectelement">
			<option *ngFor="let option of options" [value]="option.id">{{ option.firstName }} {{ option.lastName }}</option>
		</select>
		<label for="select-id1" slot="selectlabel">Name</label>
	</zoo-select>
  
	<zoo-input invalid="{{form.controls.input.touched && !form.controls.input.valid ? 1 : ''}}" 
		inputerrormsg="Invalid value" 
		infotext="Information text">
		<input id="input-id" formControlName="input" type="date" placeholder="Placeholder" slot="inputelement"/>
		<label for="input-id1" slot="inputlabel">Input date field</label>
	</zoo-input>
  
	<zoo-button (click)="submit(form)">
		<button type="button">Submit</button>
	</zoo-button>
</form>
```

5. Add CSS Custom properties to your main `styles.css`:
```CSS
:root {
	--primary-mid: #3C9700;
	--primary-light: #66B100;
	--primary-dark: #286400;
	--primary-ultralight: #EBF4E5;
	--secondary-mid: #FF6200;
	--secondary-light: #F80;
	--secondary-dark: #CC4E00;
	--info-ultralight: #ECF5FA;
	--info-mid: #459FD0;
	--warning-ultralight: #FDE8E9;
	--warning-mid: #ED1C24;
}
```

