import {Injectable} from '@angular/core'
@Injectable()
export class MyCellType extends GC.Spread.Sheets.CellTypes.Base{

   constructor(){
     super();
   }
   paint(ctx, value, x, y, w, h, style, context){
     if(!ctx)return;
     ctx.save();
     ctx.clip(x,y,w,h)
     
   }
}