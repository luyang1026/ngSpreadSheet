import {Injectable} from '@angular/core'
@Injectable()
export class MyGC{
  static cellType(){

  }
}
MyGC.cellType.prototype = new GC.Spread.Sheets.CellTypes.Base();