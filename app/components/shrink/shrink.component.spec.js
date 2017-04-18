"use strict";
var testing_1 = require("@angular/core/testing");
var shrink_component_1 = require("./shrink.component");
describe('a shrink component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                shrink_component_1.ShrinkComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([shrink_component_1.ShrinkComponent], function (ShrinkComponent) {
        component = ShrinkComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hyaW5rLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hyaW5rLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBd0Q7QUFFeEQsdURBQXFEO0FBRXJELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUM5QixJQUFJLFNBQTBCLENBQUM7SUFFL0IsbUNBQW1DO0lBQ25DLFVBQVUsQ0FBQztRQUNWLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDOUIsU0FBUyxFQUFFO2dCQUNWLGtDQUFlO2FBQ2Y7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILDRDQUE0QztJQUM1QyxVQUFVLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLGtDQUFlLENBQUMsRUFBRSxVQUFDLGVBQWU7UUFDcEQsU0FBUyxHQUFHLGVBQWUsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLHlCQUF5QixFQUFFO1FBQzdCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgU2hyaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9zaHJpbmsuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ2Egc2hyaW5rIGNvbXBvbmVudCcsICgpID0+IHtcblx0bGV0IGNvbXBvbmVudDogU2hyaW5rQ29tcG9uZW50O1xuXG5cdC8vIHJlZ2lzdGVyIGFsbCBuZWVkZWQgZGVwZW5kZW5jaWVzXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0U2hyaW5rQ29tcG9uZW50XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vIGluc3RhbnRpYXRpb24gdGhyb3VnaCBmcmFtZXdvcmsgaW5qZWN0aW9uXG5cdGJlZm9yZUVhY2goaW5qZWN0KFtTaHJpbmtDb21wb25lbnRdLCAoU2hyaW5rQ29tcG9uZW50KSA9PiB7XG5cdFx0Y29tcG9uZW50ID0gU2hyaW5rQ29tcG9uZW50O1xuXHR9KSk7XG5cblx0aXQoJ3Nob3VsZCBoYXZlIGFuIGluc3RhbmNlJywgKCkgPT4ge1xuXHRcdGV4cGVjdChjb21wb25lbnQpLnRvQmVEZWZpbmVkKCk7XG5cdH0pO1xufSk7Il19