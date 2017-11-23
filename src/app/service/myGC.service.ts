import {Injectable} from '@angular/core'
// import {$} from 'jquery'
const imgPlus = document.createElement('img');
imgPlus.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAOCAIAAABLkRCkAAACCElEQVQoFZ1SOa8BURh9M8byiMSusxZEFCqJioqClijVfofOH1FodApbIZaESIRYSlsh9n33Tt6Vm+le8qaYnHvu+ZZzv495PB5fvO/1eh2Px9FoNJ/Pz+fz8/nkOE4kEmm1WoPBoFAoeNoviDebTbfb5Sj7fr+Xy2WxWKzX66fTifIUIJfb7Q4EAmq1mpAMwwgEAlRiSC/7/b5SqRQKBQCiYFlWqVQiAK1Np1OaSywWe71ev98vlUpReLfbtVotFtfb7bZarWYyGZoCpEQiQeV4PB4KhWgKgOv1ms/n0+n0/X6nPIvDYDDIZrOU+hPAQrPZRC6q5NDIcDi8XC6ghEKhTCaDF+Dv34+QKpWKBMACUsAF3qHRaPh8PsJzh8NhNpvhgHey2WyxWAyGyR35OxyORCJBMILH43EymUQ6FIY7wnOoT8IwtslkkkqlMFrcYSJ2u93pdKJGqVQiarIHBKMqPrSGI4duoe71ekiP4aNPIkJquEMj6/W6VqsRkv7hWqfTQUMGwmIWJpPJbDZTxZ8Aa6LX66PRKAARs0AWiyUcDlutVn48ngAG0UW/3+fz0GOPI5EI3T3cfrYOdjCscrmcy+Vutxs/jI+xch6PJxgMwix4RJGt+2QhUjzearXqdDpY1sViAc/YJjy/XC7XaDR4CJfLhUZoXlK73W4z2HrK/gPAoNFo/AEVwxxlf+GkAQAAAABJRU5ErkJggg==';
const imgEllipsis = document.createElement('img');
imgEllipsis.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAIAAAA/hdJEAAABg0lEQVQ4Ec2UvU+DUBDA+x4gFaSVgC2dmy7W+DEblb01urno3+a/oDEuxjg4uWHSpI1DE2KitUFCoLRAy4dHX4xGFtrJGy5wufu9u3f3Dum6PhgMTNNECDEMA7qQW6Io8jxvNpuh8Xjc7Xbhi+d5mqaBkBOUzMX3/V6vh13XDYKA4zhAQHxOBDkMYwyBoHEcx8SUPz5bMc6alrD8J0ralF8STczhm+HEmBGkWlVaRWFgG0PD9jHLiXJFFJhwMvo0TNcLVwRxQxY5NiX8oYTvnfvLay2gyzut8zO1nnhW5/Hq9umVrTbU49ODpjz6eHm4uXvWHWVbPWkd1itrQMncS5JA10CShKSYTgWx/PwncWr69sjmQitb6oW0FyOmpChpnkWxud+WNj3M8nJtnSpgodo4apd3JyFbkmvlIpl0BOPf7/cFQYDxJ6ctqjVNy1S0KGPu/68o5PmQB7pUNWkQhoUA9woPHJYFsBYCgf90OgVN27YN8ZZlOY6zaJtgaGBLURT1Bag6uuBlIPGnAAAAAElFTkSuQmCC';

@Injectable()
export class CustomCellType extends GC.Spread.Sheets.CellTypes.Base{
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
   callback:(data:any)=>void;
   constructor(img?: string) {
    super();
    switch (img) {
      case 'plus':
        this.img = imgPlus;
        break;
      case 'ellipsis':
        this.img = imgEllipsis;
        break;
      default:
        this.img = imgPlus;
        break;
    }
  }
   //绘制cell
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
   //捕获点击事件并过滤点击区域
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
   //获取过滤后的鼠标点击
   processMouseUp(hitInfo:any){
     let sheet = hitInfo.sheet;
     if(sheet&&hitInfo.isReservedLocation){
       this.callback&&this.callback({
         row:hitInfo.row,
         col:hitInfo.col
       })

       return true;
       //click plus button
     }
     return false
   }
   on(fn:(data:any)=>void){
     if(typeof fn === 'function'){
       this.callback = fn;
     }
   }
   //在cell中添加dom
   createEditorElement(){
     var div = document.createElement('div')
     div.setAttribute("gcUIElement", "gcEditingInput")
     div.className = 'my-cell-type-plus'
     var input = document.createElement('input')
     div.appendChild(input)
     return div;
   }
   //更新dom的样式
   updateEditor(editorCxt:any, cellStyle:any, cellRect:any){
     if(editorCxt){
       var input = editorCxt.children[0]
       input.focus()
       input.style.outline = 'none'
       input.style.border='none'
       input.style.padding = `${this.padding[0]}px ${this.padding[1]}px`
       return {
         width:cellRect.width-this.picW-this.padding[1],
         height:cellRect.height
       }
     }
   }
   //当cell退出编辑状态时触发，并保存值
   getEditorValue(editorContext:any){
     var input = editorContext.children[0]
     return {
       value:input.value
     }
   }
   //当cell进入编辑状态时触发，这里把值赋给了dom
   setEditorValue(editorContext:any,value:any){
     var input = editorContext.children[0]
     if(value){
       input.value = value.value;
     }
   }
}