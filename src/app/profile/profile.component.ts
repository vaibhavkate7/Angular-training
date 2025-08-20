import { Component } from "@angular/core";

@Component({
  selector:'app-profile',
  templateUrl:'./profile.component.html',
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
}