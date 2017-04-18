"use strict";
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var database_service_1 = require("./../../providers/database/database.service");
var utils_1 = require("utils/utils");
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
    /**
     * launchUrl
     */
    LinksComponent.prototype.launchUrl = function (url) {
        utils_1.openUrl(url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLHNDQUFrRDtBQUVsRCxnRkFBdUU7QUFDdkUscUNBQXNDO0FBU3RDLElBQWEsY0FBYztJQUkxQix3QkFDUyxNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsUUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUUxQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRixpQ0FBUSxHQUFSO1FBQUEsaUJBT0U7UUFORCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtZQUNkLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUVmLENBQUM7SUFFRDs7T0FFRztJQUNJLG1DQUFVLEdBQWpCO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHRDs7T0FFRztJQUNJLGtDQUFTLEdBQWhCLFVBQWlCLEdBQVc7UUFDM0IsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEIsQ0FBQztJQUNELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbEMsQ0FBQztxQ0FPZ0IsZUFBTTtRQUNKLGlCQUFRO1FBQ1IsMkJBQVE7R0FQZixjQUFjLENBMEMxQjtBQTFDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlua3MgfSBmcm9tICcuL2xpbmtzJztcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi8uLi8uLi9wcm92aWRlcnMvZGF0YWJhc2UvZGF0YWJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBvcGVuVXJsIH0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdsaW5rcycsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnbGlua3MuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnbGlua3MuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHB1YmxpYyB1cmxzOiBMaW5rc1tdXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcblx0XHRwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZVxuXHQpIHtcblx0XHR0aGlzLnVybHMgPSBbXVxuXHQgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubG9jYXRpb24uc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHRoaXMudXJscyA9IFtdXG5cdFx0XHR0aGlzLmxvYWREYXRhKClcblx0XHR9KVxuXHRcdHRoaXMubG9hZERhdGEoKVxuXHRcdFxuXHQgfVxuXG5cdCAvKipcblx0ICAqIGdvVG9TaHJpbmtcblx0ICAqL1xuXHQgcHVibGljIGdvVG9TaHJpbmsoKSB7XG5cdFx0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2hyaW5rJ10pO1xuXHQgfVxuXG5cblx0IC8qKlxuXHQgICogbGF1bmNoVXJsXG5cdCAgKi9cblx0IHB1YmxpYyBsYXVuY2hVcmwodXJsOiBzdHJpbmcpIHtcblx0XHQgb3BlblVybCh1cmwpXG5cdCB9XG5cblx0IHByaXZhdGUgbG9hZERhdGEoKSB7XG5cdFx0bGV0IHJvd3MgPSB0aGlzLmRhdGFiYXNlLmdldERhdGFiYXNlKCkuZXhlY3V0ZVF1ZXJ5KCd1cmxzJyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0dGhpcy51cmxzLnB1c2gocm93c1tpXSlcblx0XHR9XG5cdCB9XG59Il19