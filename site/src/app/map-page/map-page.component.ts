import { Component } from '@angular/core';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {
  lath=28.100799;
  long=-28.100799;
  // url=`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14383.28281049951!2d28.10056285!3d-25.67723765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1696037316971!5m2!1sen!2sza`;
  url=`https://www.google.com/maps/embed/v1/place?key=AIzaSyCVYEXJ6qQ5rTgtL7WAAV3D2c1z8ZQQYws&q="${this.long},${this.lath}`;
}
