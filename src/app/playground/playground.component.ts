import {Component, Directive, Input, ViewChild, AfterViewInit} from '@angular/core';

@Directive({selector: 'pane'})
export class Pane {
 @Input() id: string;
}

@Component({
 selector: 'example-app',
 template: `
   <pane id="1" *ngIf="shouldShow"></pane>
   <pane id="2" *ngIf="!shouldShow"></pane>
   
   <button (click)="toggle()">Toggle</button>
      
   <div>Selected: {{selectedPane}}</div> 
 `,
})
export class ViewChildComp implements AfterViewInit{
 @ViewChild(Pane) pane:any;
//  set pane(v: Pane) {
//    setTimeout(() => { this.selectedPane = v.id; }, 0);
//  }
 selectedPane: string = '';
 shouldShow = true;
 toggle() {
    this.shouldShow = !this.shouldShow;
  }
  ngAfterViewInit() {
    console.log(this.pane);
  }
}