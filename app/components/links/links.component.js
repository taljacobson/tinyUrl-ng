"use strict";
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var database_service_1 = require("./../../providers/database/database.service");
var LinksComponent = (function () {
    function LinksComponent(router, location, database) {
        this.router = router;
        this.location = location;
        this.database = database;
        this.urls = [];
    }
    LinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.subscribe(function () {
            _this.urls = [];
            _this.loadData();
        });
        this.loadData();
    };
    /**
     * goToShrink
     */
    LinksComponent.prototype.goToShrink = function () {
        this.router.navigate(['shrink']);
    };
    LinksComponent.prototype.loadData = function () {
        var rows = this.database.getDatabase().executeQuery('urls');
        for (var i = 0; i < rows.length; i++) {
            this.urls.push(rows[i]);
        }
    };
    return LinksComponent;
}());
LinksComponent = __decorate([
    core_1.Component({
        selector: 'links',
        moduleId: module.id,
        templateUrl: 'links.component.html',
        styleUrls: ['links.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        common_1.Location,
        database_service_1.Database])
], LinksComponent);
exports.LinksComponent = LinksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLHNDQUFrRDtBQUVsRCxnRkFBdUU7QUFVdkUsSUFBYSxjQUFjO0lBSTFCLHdCQUNTLE1BQWMsRUFDZCxRQUFrQixFQUNsQixRQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVGLGlDQUFRLEdBQVI7UUFBQSxpQkFPRTtRQU5ELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO1lBQ2QsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBRWYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQVUsR0FBakI7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEIsQ0FBQztJQUNELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbEMsQ0FBQztxQ0FPZ0IsZUFBTTtRQUNKLGlCQUFRO1FBQ1IsMkJBQVE7R0FQZixjQUFjLENBa0MxQjtBQWxDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlua3MgfSBmcm9tICcuL2xpbmtzJztcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi8uLi8uLi9wcm92aWRlcnMvZGF0YWJhc2UvZGF0YWJhc2Uuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbGlua3MnLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJ2xpbmtzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ2xpbmtzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExpbmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgdXJsczogTGlua3NbXVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG5cdFx0cHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2Vcblx0KSB7XG5cdFx0dGhpcy51cmxzID0gW11cblx0IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmxvY2F0aW9uLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLnVybHMgPSBbXVxuXHRcdFx0dGhpcy5sb2FkRGF0YSgpXG5cdFx0fSlcblx0XHR0aGlzLmxvYWREYXRhKClcblx0XHRcblx0IH1cblxuXHQgLyoqXG5cdCAgKiBnb1RvU2hyaW5rXG5cdCAgKi9cblx0IHB1YmxpYyBnb1RvU2hyaW5rKCkge1xuXHRcdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NocmluayddKTtcblx0IH1cblxuXHQgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcblx0XHRsZXQgcm93cyA9IHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5leGVjdXRlUXVlcnkoJ3VybHMnKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHR0aGlzLnVybHMucHVzaChyb3dzW2ldKVxuXHRcdH1cblx0IH1cbn0iXX0=