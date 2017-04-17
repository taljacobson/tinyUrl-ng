import { TestBed, inject } from '@angular/core/testing';

import { LinksComponent } from './links.component';

describe('a links component', () => {
	let component: LinksComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LinksComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LinksComponent], (LinksComponent) => {
		component = LinksComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});