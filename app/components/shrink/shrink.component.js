"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var database_service_1 = require("./../../providers/database/database.service");
var nativescript_toast_1 = require("nativescript-toast");
var ShrinkComponent = (function () {
    function ShrinkComponent(http, location, database) {
        this.http = http;
        this.location = location;
        this.database = database;
        this.longUrl = '';
    }
    ShrinkComponent.prototype.ngOnInit = function () { };
    /**
     * shrink
     */
    ShrinkComponent.prototype.shrink = function () {
        var _this = this;
        if (this.longUrl) {
            var Url = "http://tinyurl.com/api-create.php?url=" + this.longUrl;
            this.http.get(Url)
                .map(function (result) { return result.text(); })
                .do(function (result) { return console.log("result: ", result); })
                .subscribe(function (short) {
                _this.database.getDatabase().createDocument({
                    type: 'url',
                    long: _this.longUrl,
                    short: short
                });
                _this.location.back();
            }, function (error) {
                console.log("ero", error);
            });
        }
        else {
            nativescript_toast_1.makeText('a valid long URl us required').show();
        }
    };
    return ShrinkComponent;
}());
ShrinkComponent = __decorate([
    core_1.Component({
        selector: 'shrink',
        moduleId: module.id,
        templateUrl: 'shrink.component.html',
        styleUrls: ['shrink.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http,
        common_1.Location,
        database_service_1.Database])
], ShrinkComponent);
exports.ShrinkComponent = ShrinkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hyaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNocmluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBK0Q7QUFDL0QsMENBQTJDO0FBQzNDLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsZ0ZBQXVFO0FBQ3ZFLHlEQUFxRDtBQVVyRCxJQUFhLGVBQWU7SUFJM0IseUJBQ1MsSUFBVSxFQUNWLFFBQWtCLEVBQ2xCLFFBQWtCO1FBRmxCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFRLEdBQVIsY0FBYSxDQUFDO0lBR2Q7O09BRUc7SUFDSSxnQ0FBTSxHQUFiO1FBQUEsaUJBbUJDO1FBbEJBLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFXLHdDQUF3QyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2lCQUNoQixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDO2lCQUN4QixFQUFFLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztpQkFDN0MsU0FBUyxDQUFDLFVBQUEsS0FBSztnQkFDbkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzFDLElBQUksRUFBRSxLQUFLO29CQUNYLElBQUksRUFBRSxLQUFJLENBQUMsT0FBTztvQkFDbEIsS0FBSyxPQUFBO2lCQUNMLENBQUMsQ0FBQTtnQkFDRixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUE7WUFDMUIsQ0FBQyxDQUFDLENBQUE7UUFDUixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCw2QkFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDbkMsQ0FBQztxQ0FPYyxXQUFJO1FBQ0EsaUJBQVE7UUFDUiwyQkFBUTtHQVBmLGVBQWUsQ0FzQzNCO0FBdENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlT3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4vLi4vLi4vcHJvdmlkZXJzL2RhdGFiYXNlL2RhdGFiYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3QsIG1ha2VUZXh0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzaHJpbmsnLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJ3Nocmluay5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWydzaHJpbmsuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2hyaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgbG9uZ1VybDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcblx0XHRwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZVxuXHQpIHsgXG5cdFx0dGhpcy5sb25nVXJsID0gJyc7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cblx0LyoqXG5cdCAqIHNocmlua1xuXHQgKi9cblx0cHVibGljIHNocmluaygpIHtcblx0XHRpZih0aGlzLmxvbmdVcmwpIHtcblx0XHRcdGxldCBVcmw6IHN0cmluZyA9IFwiaHR0cDovL3Rpbnl1cmwuY29tL2FwaS1jcmVhdGUucGhwP3VybD1cIiArIHRoaXMubG9uZ1VybDtcblx0XHRcdHRoaXMuaHR0cC5nZXQoVXJsKVxuXHRcdFx0XHQubWFwKHJlc3VsdCA9PiByZXN1bHQudGV4dCgpKVxuICAgICAgICAuZG8ocmVzdWx0ID0+IGNvbnNvbGUubG9nKGByZXN1bHQ6IGAsIHJlc3VsdCkpXG4gICAgICAgIC5zdWJzY3JpYmUoc2hvcnQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5jcmVhdGVEb2N1bWVudCh7XG5cdFx0XHRcdFx0XHR0eXBlOiAndXJsJyxcblx0XHRcdFx0XHRcdGxvbmc6IHRoaXMubG9uZ1VybCxcblx0XHRcdFx0XHRcdHNob3J0XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJvXCIsZXJyb3IpXG4gICAgICAgIH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1ha2VUZXh0KCdhIHZhbGlkIGxvbmcgVVJsIHVzIHJlcXVpcmVkJykuc2hvdygpO1xuICAgIFx0fVxuXHR9XG59Il19