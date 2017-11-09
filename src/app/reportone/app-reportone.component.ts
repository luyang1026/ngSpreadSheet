import {Component} from "@angular/core"
import {DataService} from "../app-data.service";
@Component({
    templateUrl: './app-reportone.component.html'
})
export class ReportoneComponent {
    hostStyle = {
        top: '90px',
        bottom: '35px'
    };
    showRowOutline = true;
    showColumnOutline = true;
    rowOutlineInfo = [{index: 1, count: 4}, {index: 6, count: 4}];
    columnOutlineInfo = [{index: 0, count: 4}];
    data: any;

    constructor(private dataservice: DataService) {
        this.data = dataservice.getPersonAddressData();
    }
}