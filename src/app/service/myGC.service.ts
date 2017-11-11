import {Injectable} from '@angular/core'
// import {$} from 'jquery'
const img = document.createElement('img')
img.src = '../../img/plus.png'
@Injectable()
export class MyCellType extends GC.Spread.Sheets.CellTypes.Base{
   fillStyle = '#555'
   strokeStyle = '#666'
   padding = [2,5];
   circleOuterPadding = 1;
   x:number;
   y:number;
   w:number;
   h:number;
   picW = 23;
   picH = 14;
   img:any;
   constructor(){  
     super();
     this.img = img;
   }
   paint(ctx:any, value:any, x:number, y:number, w:number, h:number, style:any, context:any){
      
     if(!ctx)return;
     let p = this.padding;
     this.x = x+p[1];
     this.y = y+p[0];
     this.w = w-p[1]*2;
     this.h = h-p[0]*2;
     ctx.save();

     ctx.fillStyle=this.fillStyle;
     ctx.strokeStyle=this.strokeStyle;
     ctx.rect(this.x,this.y,this.w,this.h)
     ctx.clip()
     //code..
     ctx.strokeRect(this.x,this.y,this.w,this.h)     
     ctx.drawImage(this.img,this.x+this.w-this.picW,this.y+this.circleOuterPadding)

     ctx.closePath()
     ctx.restore();
     if (value) {
        super.paint.apply(this, [ctx, value.value, x, y, w, h, style, context]);
      }
   }
   getHitInfo(x:number, y:number, cellStyle:any, cellRect:any, context:any):any{
     let ltx = cellRect.x+cellRect.width-this.picW-this.padding[1];
     let lty = cellRect.y;
     let rtx = cellRect.x+cellRect.width;
     let lby = cellRect.y+cellRect.height;
     var info = {
       x: x,
       y: y,
       row: context.row,
       col: context.col,
       cellRect: cellRect,
       sheetArea: context.sheetArea
     }
     if(x>=ltx&&x<=rtx&&y>=lty&&y<=lby){
        info['isReservedLocation'] = true;
     }
     return info;
   }
   processMouseUp(hitInfo:any){
     let sheet = hitInfo.sheet;
     if(sheet&&hitInfo.isReservedLocation){
       console.log('clicked')
       return true;
       //click plus button
     }
     return false
   }
   createEditorElement(){
     var div = document.createElement('div')
     div.setAttribute("gcUIElement", "gcEditingInput")
     div.className = 'my-cell-type-plus'
     // div.css('overflow','hidden')
     // div.style.background = 'red';
     var input = document.createElement('input')
     div.appendChild(input)
     return div;
   }
   updateEditor(editorCxt:any){
     if(editorCxt){
       var input = editorCxt.children[0]
       input.focus()
       input.style.outline = 'none'
       input.style.border='none'
       input.style.padding = `${this.padding[0]}px ${this.padding[1]}px`
     }
   }
   getEditorValue(editorContext:any){//triggers on cell's blur state
     var input = editorContext.children[0]
     return {
       value:input.value
     }
   }
   setEditorValue(editorContext:any,value:any){//trigger on cell is being active
     var input = editorContext.children[0]
     if(value){
       input.value = value.value;
     }
   }
}