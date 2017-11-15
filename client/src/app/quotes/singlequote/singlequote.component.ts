import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from "./../../quote";
@Component({
  selector: 'app-singlequote',
  templateUrl: './singlequote.component.html',
  styleUrls: ['./singlequote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SinglequoteComponent implements OnInit {
  @Input() quote:Quote;
  @Output() voteup=new EventEmitter;
  @Output() votedown=new EventEmitter;
  @Output() delete=new EventEmitter;
  constructor() { }
  triggervoteup(){

    this.voteup.emit(this.quote.index);
  }
  triggervotedown(){
    this.votedown.emit(this.quote.index);
  }
  triggerdelete(){
    this.delete.emit(this.quote.index);
  }
  ngOnInit() {
  }

}
