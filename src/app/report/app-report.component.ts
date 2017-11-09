//<reference path="../lib/GC.Spread.Sheets.d.ts"/>
import {Component,OnInit} from "@angular/core"
import { ReportDataService } from "../service/report1.service";
import { MyCellType } from "../service/myGC.service";
import { WorksheetComponent } from "../lib/gc.spread.sheets.angular2.10.2.0";
@Component({
    templateUrl: './app-report.component.html'
})
export class ReportComponent{
    hostStyle = {
        top: '90px',
        bottom: '35px'
    }
    showRowOutline = true;
    showColumnOutline = true;
    data: any[];
    cata: any[];
    colHeader:string[] = ['类别','项目','金额'];
    spread: any;
    sheet: any;
    formatter: string;
    grayAreaBackColor = "#444";
    workbookInit(ev:any){
        this.spread = ev.spread
        this.sheet = this.spread.getActiveSheet()

        for (let i = 0,colHeader=GC.Spread.Sheets.SheetArea.colHeader; i < this.colHeader.length; ++i) {
           this.setCell(0,i,this.colHeader[i],colHeader)
        }
        for (var i = 0; i < this.data.length; ++i) {
            this.setCell(i,1,this.data[i].content)
            this.addComment(i,1,this.data[i].comment)
            if(this.data[i].plus){
                this.testCostom(i,2)
                // this.addPlus(i,2);break;
                this.vhAlignCenter(this.sheet.getCell(i,2))
            }
        }
        this.sheet.autoFitColumn(1);
        this.lockArea([this.sheet.getRange(0,2,38,2)])
        this.cata.reduce((pre,cur,index,arr)=>{
            this.sheet.addSpan(pre.span,0,cur.span,1)
            this.setCell(pre.span,0,cur.name)
            this.sheet.getCell(pre.span,0).wordWrap(true)
            this.vhAlignCenter(this.sheet.getCell(pre.span,0))
            return {span:pre.span+cur.span}
        },{span:0})
    }
    setCell(row:number,col:number,value:string,target?:any):void{
        this.sheet.setValue(row,col,value,target)
    }
    vhAlignCenter(cell:any):void{
        cell.vAlign(GC.Spread.Sheets.VerticalAlign.center);
        cell.hAlign(GC.Spread.Sheets.HorizontalAlign.center);
    }
    lockArea(range:any[]):void{
        this.sheet.options.isProtected = true;
        for(let area of range){
            area.locked(false)
        }
    }
    addComment(row:number,col:number,comment:string):void{
        var r = this.sheet.comments.add(row,col,comment)
            .lockText(false)
            .locked(false)
            .dynamicMove(true)
            .dynamicSize(true)
            .location(-500)
    }
    addPlus(row:number,col:number):void{
        var btn = new GC.Spread.Sheets.CellTypes.Button();
        btn.buttonBackColor("#ccc");
        btn.text("+");
        btn.marginLeft(25);
        btn.marginTop(5);
        this.sheet.getCell(row,col).cellType(btn);
    }
    testCostom(row:number,col:number):void{
        var btn = new MyCellType();
        this.sheet.getCell(row,col).cellType(btn);
    }
    constructor(
        private dataservice: ReportDataService,
    ){
        this.formatter = "#.00"
    }
    ngOnInit():void{
        this.data = this.dataservice.report();
        this.cata = this.dataservice.reportCata();
    }
}