import { TestBed, inject } from '@angular/core/testing';

import { ShrinkComponent } from './shrink.component';

describe('a shrink component', () => {
	let component: ShrinkComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ShrinkComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ShrinkComponent], (ShrinkComponent) => {
		component = ShrinkComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});