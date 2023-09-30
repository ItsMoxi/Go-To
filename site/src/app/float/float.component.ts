import { Component } from '@angular/core';

@Component({
  selector: 'app-float',
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.css']
})
export class FloatComponent {
  open=false;
  showhide(){
    this.open=!this.open;

  }

}
