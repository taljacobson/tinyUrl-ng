"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var ShrinkComponent = (function () {
    function ShrinkComponent(http, location) {
        this.http = http;
        this.location = location;
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
                .subscribe(function (suc) {
                console.log('suc', suc);
                _this.location.back();
            }, function (error) {
                console.log("ero", error);
            });
        }
        else {
            console.log("there needs to be a value");
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
        common_1.Location])
], ShrinkComponent);
exports.ShrinkComponent = ShrinkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hyaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNocmluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBK0Q7QUFDL0QsMENBQTJDO0FBQzNDLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFTOUIsSUFBYSxlQUFlO0lBSTNCLHlCQUNTLElBQVUsRUFDVixRQUFrQjtRQURsQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVEsR0FBUixjQUFhLENBQUM7SUFHZDs7T0FFRztJQUNJLGdDQUFNLEdBQWI7UUFBQSxpQkFlQztRQWRBLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFXLHdDQUF3QyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2lCQUNoQixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDO2lCQUN4QixFQUFFLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztpQkFDN0MsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzFCLENBQUMsQ0FBQyxDQUFBO1FBQ1IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQzFDLENBQUM7SUFDSixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ25DLENBQUM7cUNBT2MsV0FBSTtRQUNBLGlCQUFRO0dBTmYsZUFBZSxDQWlDM0I7QUFqQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2VPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc2hyaW5rJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICdzaHJpbmsuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc2hyaW5rLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNocmlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHVibGljIGxvbmdVcmw6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGh0dHA6IEh0dHAsXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb25cblx0KSB7IFxuXHRcdHRoaXMubG9uZ1VybCA9ICcnO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXG5cdC8qKlxuXHQgKiBzaHJpbmtcblx0ICovXG5cdHB1YmxpYyBzaHJpbmsoKSB7XG5cdFx0aWYodGhpcy5sb25nVXJsKSB7XG5cdFx0XHRsZXQgVXJsOiBzdHJpbmcgPSBcImh0dHA6Ly90aW55dXJsLmNvbS9hcGktY3JlYXRlLnBocD91cmw9XCIgKyB0aGlzLmxvbmdVcmw7XG5cdFx0XHR0aGlzLmh0dHAuZ2V0KFVybClcblx0XHRcdFx0Lm1hcChyZXN1bHQgPT4gcmVzdWx0LnRleHQoKSlcbiAgICAgICAgLmRvKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhgcmVzdWx0OiBgLCByZXN1bHQpKVxuICAgICAgICAuc3Vic2NyaWJlKHN1YyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Yycsc3VjKVxuXHRcdFx0XHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcm9cIixlcnJvcilcbiAgICAgICAgfSlcblx0XHR9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGVyZSBuZWVkcyB0byBiZSBhIHZhbHVlXCIpXG4gICAgfVxuXHR9XG59Il19