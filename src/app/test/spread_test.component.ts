import {Component} from "@angular/core";
import {ReportDataService} from "../service/report1.service";

import {CustomTagRenderer} from '../service/costomRenderer.service'
@Component({
    templateUrl: './spread_test.component.html'
})
export class ReportTestComponent {
     hostStyle = {
          width: '100%',
          height: '600px'
      };
    data: any;
    title: string;
    spread: any;
    sheet: any;
    popupVisible: boolean;
    balanceList: any;
    arr: [1, 2, 3];
    testData  = [
        {
            path: 'c11',
            name: '科目11',
            children_json:[
                {
                    path: 'c2',
                    name: '科目21'
                },
                {
                    path: 'c21',
                    name: '科目22',
                    children_json: [
                        {path: 'c3', name: '科目31'}
                    ]
                }
            ]
        },
        {
            path: 'c12',
            name: '科目12'
        }

    ];
    constructor(
        private dataservice: ReportDataService
    ) {
        this.data = dataservice.reportA100400();
        this.balanceList = dataservice.reportResponse().body.balanceList_json;
        this.title = dataservice.reportResponse().body.K_KMQC;
    }
    cancel() {
        this.popupVisible = false;
    }
    workbookInit(ev: any) {
        this.spread = ev.spread
        this.spread.suspendPaint();
        this.spread.fromJSON(this.data);
        this.spread.resumePaint();
        this.sheet = this.spread.getActiveSheet()
        let tagCells = new CustomTagRenderer(this.spread, this.data);
        tagCells.addListener('customCellClick', (data) => {
            this.popupVisible = true;
        })
        this.sheet.setTag(0, 0, 'test')
    }
}
