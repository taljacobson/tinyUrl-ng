"use strict";
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var LinksComponent = (function () {
    function LinksComponent(router, location) {
        this.router = router;
        this.location = location;
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
        this.urls.push({
            long: "http://www.thepolyglotdeveloper.com",
            short: "http://tinyurl.com/h9knhdk"
        });
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
        common_1.Location])
], LinksComponent);
exports.LinksComponent = LinksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLHNDQUFrRDtBQVdsRCxJQUFhLGNBQWM7SUFJMUIsd0JBQ1MsTUFBYyxFQUNkLFFBQWtCO1FBRGxCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVGLGlDQUFRLEdBQVI7UUFBQSxpQkFPRTtRQU5ELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO1lBQ2QsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBRWYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQVUsR0FBakI7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2I7WUFDQyxJQUFJLEVBQUUscUNBQXFDO1lBQzNDLEtBQUssRUFBRSw0QkFBNEI7U0FDbkMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNsQyxDQUFDO3FDQU9nQixlQUFNO1FBQ0osaUJBQVE7R0FOZixjQUFjLENBbUMxQjtBQW5DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlua3MgfSBmcm9tICcuL2xpbmtzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdsaW5rcycsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnbGlua3MuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnbGlua3MuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHB1YmxpYyB1cmxzOiBMaW5rc1tdXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuXHQpIHtcblx0XHR0aGlzLnVybHMgPSBbXVxuXHQgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubG9jYXRpb24uc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHRoaXMudXJscyA9IFtdXG5cdFx0XHR0aGlzLmxvYWREYXRhKClcblx0XHR9KVxuXHRcdHRoaXMubG9hZERhdGEoKVxuXHRcdFxuXHQgfVxuXG5cdCAvKipcblx0ICAqIGdvVG9TaHJpbmtcblx0ICAqL1xuXHQgcHVibGljIGdvVG9TaHJpbmsoKSB7XG5cdFx0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2hyaW5rJ10pO1xuXHQgfVxuXG5cdCBwcml2YXRlIGxvYWREYXRhKCkge1xuXHRcdCB0aGlzLnVybHMucHVzaChcblx0XHRcdCB7IFxuXHRcdFx0XHQgbG9uZzogXCJodHRwOi8vd3d3LnRoZXBvbHlnbG90ZGV2ZWxvcGVyLmNvbVwiLFxuXHRcdFx0XHQgc2hvcnQ6IFwiaHR0cDovL3Rpbnl1cmwuY29tL2g5a25oZGtcIlxuXHRcdFx0IH1cblx0XHQgKVxuXHQgfVxufSJdfQ==