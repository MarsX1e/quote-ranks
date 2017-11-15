import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Quote} from "./../quote"

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuotesComponent implements OnInit {
  quote:Quote;
  quotes:Array<Quote>;
  constructor() {
    this.quote=new Quote();
    this.quotes=[];
   }
   quotecreate(){
     this.quote.index=this.quotes.length;
     this.quotes.push(this.quote);
     
     this.quote=new Quote();
   }
   swipe(index){
    if(this.quotes[index].vote>this.quotes[index-1].vote){
      let temp=this.quotes[index];
      this.quotes[index]=this.quotes[index-1];
      this.quotes[index-1]=temp;
      this.quotes[index].index=index;
      this.quotes[index-1].index=index-1;
      this.swipe(index-1);
    }
  }
   swipedown(index){
    if(this.quotes[index].vote<this.quotes[index+1].vote){
      let temp=this.quotes[index];
      this.quotes[index]=this.quotes[index+1];
      this.quotes[index+1]=temp;
      this.quotes[index].index=index;
      this.quotes[index+1].index=index+1;
      this.swipedown(index+1);

   }
  }
   increase(index){
    this.quotes[index].vote++;
    this.swipe(index);
   }
   decrease(index){
    this.quotes[index].vote--;
    this.swipedown(index);
   }
   delete(index){
     for(let i=index;i<this.quotes.length-1;i++){
      this.quotes[i]=this.quotes[i+1];
     };
     this.quotes.pop();
   }
  ngOnInit() {
  }

}
