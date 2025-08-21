import { Component } from "@angular/core";
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'app-profile',
  templateUrl:'./profile.component.html',
  imports: [NgFor],
})

export class ProfileCompoent {
 bgColor='green';
 fontSize='80px';
 headingSizeBing='60px';
 headingSizeSmall='30px';
 zoom=true;

 updeateHeadingSize() {
  this.zoom=!this.zoom
 }

 userName:string|null=""
 constructor(private route:ActivatedRoute){}
 ngOnInit(){
//  this.userName=this.route.snapshot.paramMap.get('name')
//  console.log(this.userName);
 this.route.queryParams.subscribe(params=>{
this.userName=params['name'];

 })
 }
 

}