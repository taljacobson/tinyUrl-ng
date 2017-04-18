"use strict";
var testing_1 = require("@angular/core/testing");
var links_component_1 = require("./links.component");
describe('a links component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                links_component_1.LinksComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([links_component_1.LinksComponent], function (LinksComponent) {
        component = LinksComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5rcy5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQXdEO0FBRXhELHFEQUFtRDtBQUVuRCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDN0IsSUFBSSxTQUF5QixDQUFDO0lBRTlCLG1DQUFtQztJQUNuQyxVQUFVLENBQUM7UUFDVixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzlCLFNBQVMsRUFBRTtnQkFDVixnQ0FBYzthQUNkO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCw0Q0FBNEM7SUFDNUMsVUFBVSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxnQ0FBYyxDQUFDLEVBQUUsVUFBQyxjQUFjO1FBQ2xELFNBQVMsR0FBRyxjQUFjLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUM3QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IExpbmtzQ29tcG9uZW50IH0gZnJvbSAnLi9saW5rcy5jb21wb25lbnQnO1xuXG5kZXNjcmliZSgnYSBsaW5rcyBjb21wb25lbnQnLCAoKSA9PiB7XG5cdGxldCBjb21wb25lbnQ6IExpbmtzQ29tcG9uZW50O1xuXG5cdC8vIHJlZ2lzdGVyIGFsbCBuZWVkZWQgZGVwZW5kZW5jaWVzXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0TGlua3NDb21wb25lbnRcblx0XHRcdF1cblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gaW5zdGFudGlhdGlvbiB0aHJvdWdoIGZyYW1ld29yayBpbmplY3Rpb25cblx0YmVmb3JlRWFjaChpbmplY3QoW0xpbmtzQ29tcG9uZW50XSwgKExpbmtzQ29tcG9uZW50KSA9PiB7XG5cdFx0Y29tcG9uZW50ID0gTGlua3NDb21wb25lbnQ7XG5cdH0pKTtcblxuXHRpdCgnc2hvdWxkIGhhdmUgYW4gaW5zdGFuY2UnLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudCkudG9CZURlZmluZWQoKTtcblx0fSk7XG59KTsiXX0=