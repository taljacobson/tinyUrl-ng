"use strict";
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var Database = (function () {
    function Database() {
        if (!this.isInstatiated) {
            this.storage = new nativescript_couchbase_1.Couchbase('tinyurl');
            this.storage.createView('urls', '1', function (document, emitter) {
                if (document.type == 'url') {
                    emitter.emit(document._id, document);
                }
            });
            this.isInstatiated = true;
        }
    }
    /**
     * getDatabase
     */
    Database.prototype.getDatabase = function () {
        return this.storage;
    };
    return Database;
}());
Database = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Database);
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFHbkQsSUFBYSxRQUFRO0lBS2pCO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksa0NBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQUMsUUFBUSxFQUFFLE9BQU87Z0JBQ25ELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOEJBQVcsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksUUFBUTtJQURwQixpQkFBVSxFQUFFOztHQUNBLFFBQVEsQ0F1QnBCO0FBdkJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tICduYXRpdmVzY3JpcHQtY291Y2hiYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcclxuXHJcbiAgICBwcml2YXRlIGlzSW5zdGF0aWF0ZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHN0b3JhZ2U6IENvdWNoYmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZighdGhpcy5pc0luc3RhdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBDb3VjaGJhc2UoJ3Rpbnl1cmwnKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmNyZWF0ZVZpZXcoJ3VybHMnLCAnMScsIChkb2N1bWVudCwgZW1pdHRlcikgPT4gIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC50eXBlID09ICd1cmwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KGRvY3VtZW50Ll9pZCwgZG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pc0luc3RhdGlhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXREYXRhYmFzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RGF0YWJhc2UoKTogQ291Y2hiYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlO1xyXG4gICAgfVxyXG59ICJdfQ==