import { NgModule } from "@angular/core";
import { DoughnutChartComponent } from "./doughnut-chart.component";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "angular-bootstrap-md";

@NgModule({
    declarations:[
        DoughnutChartComponent
    ],
    exports:[
        DoughnutChartComponent
    ],
    imports:[
        CommonModule,
        ChartsModule
    ]
})
export class DoughnutChartModule {}