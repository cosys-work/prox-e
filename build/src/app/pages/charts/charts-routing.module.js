"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routedComponents = exports.ChartsRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const charts_component_1 = require("./charts.component");
const echarts_component_1 = require("./echarts/echarts.component");
const d3_component_1 = require("./d3/d3.component");
const chartjs_component_1 = require("./chartjs/chartjs.component");
const routes = [{
        path: '',
        component: charts_component_1.ChartsComponent,
        children: [{
                path: 'echarts',
                component: echarts_component_1.EchartsComponent,
            }, {
                path: 'd3',
                component: d3_component_1.D3Component,
            }, {
                path: 'chartjs',
                component: chartjs_component_1.ChartjsComponent,
            }],
    }];
let ChartsRoutingModule = class ChartsRoutingModule {
};
ChartsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], ChartsRoutingModule);
exports.ChartsRoutingModule = ChartsRoutingModule;
exports.routedComponents = [
    charts_component_1.ChartsComponent,
    echarts_component_1.EchartsComponent,
    d3_component_1.D3Component,
    chartjs_component_1.ChartjsComponent,
];
