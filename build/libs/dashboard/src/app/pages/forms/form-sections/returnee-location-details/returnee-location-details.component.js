"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturneeLocationDetailsComponent = void 0;
const core_1 = require("@angular/core");
const countries_geo_1 = require("../../../../@core/data/countries.geo");
const province_districts_geo_1 = require("../../../../@core/data/province-districts.geo");
let ReturneeLocationDetailsComponent = class ReturneeLocationDetailsComponent {
    constructor() {
        this.districts = { destinationOpts: [], addressOpts: [] };
        this.permanentAddrProvince = null;
        this.finalDestProvince = null;
    }
    ngOnInit() {
        this.countries = countries_geo_1.COUNTRIES;
        this.nearbyCountries = countries_geo_1.NEARBY_COUNTRIES;
        this.nepalAndNeighbors = ['Nepal', ...countries_geo_1.NEARBY_COUNTRIES];
        this.provinces = province_districts_geo_1.PROVINCES.map(province => province.name);
    }
    changeAddrProvince(event) {
        this.permanentAddrProvince = event;
        this.districts.addressOpts = province_districts_geo_1.PROVINCES.find(province => province.name === this.permanentAddrProvince).districts;
    }
    changeDestProvince(event) {
        this.finalDestProvince = event;
        this.districts.destinationOpts = province_districts_geo_1.PROVINCES.find(province => province.name === this.finalDestProvince).districts;
    }
};
ReturneeLocationDetailsComponent = __decorate([
    core_1.Component({
        selector: 'ngx-returnee-location-details',
        templateUrl: './returnee-location-details.component.html',
        styleUrls: ['./returnee-location-details.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ReturneeLocationDetailsComponent);
exports.ReturneeLocationDetailsComponent = ReturneeLocationDetailsComponent;
