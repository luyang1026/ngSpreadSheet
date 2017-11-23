import { CustomCellType } from './myGC.service';
export class CustomTagRenderer{
  public json: any;
  public sheets: any;
  public activeSheet: any;
  public data: any;
  public spreadInstance: any;
  public sheetInstance: any;
  private customCellClickCallback: (clickInfo: any) => void;
  constructor(spreadInstance: any, json: any, sheetName = 'Sheet1') {
    this.json = json;
    this.sheets = json.sheets || {};
    this.activeSheet = this.sheets[sheetName] || {};
    this.data = this.activeSheet.data.dataTable;
    this.spreadInstance = spreadInstance;
    this.sheetInstance = this.spreadInstance.getActiveSheet();
    this.init();
  }
  private init(): void {
    this.spreadInstance.suspendPaint();
    this.cellsIterator();
    this.spreadInstance.resumePaint();
  }
  private cellsIterator(): void {
    for (let row of Object.keys(this.data)){
      for (let col of Object.keys(this.data[row])){
        if (this.sheetInstance.getTag(row, col)) {
          let tagInfo = JSON.parse(this.sheetInstance.getTag(row, col));
          if (tagInfo.elementType) {
            this.addCustomCellType(tagInfo.elementType, +row, +col);
          }
        }
      }
    }
  }
  private addCustomCellType(elementType: any, row: number, col: number): void {
    let celltype = new CustomCellType(elementType);
    this.sheetInstance.getCell(row, col).cellType(celltype);
    celltype.on((clickInfo) => {
      this.customCellClickCallback(clickInfo);
    })
  }
  public addListener(eventName = 'customCellClick' , callback: (clickInfo: any) => void) {
    switch (eventName) {
      case 'customCellClick':
        this.customCellClickCallback = callback;
      break;
      default:
        this.customCellClickCallback = callback;
      break;
    }
  }
}
