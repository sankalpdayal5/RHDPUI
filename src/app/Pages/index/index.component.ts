import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DataService } from "../../Services/data.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private objService: DataService) { }

  ngOnInit() {
    this.objService.get('http://localhost:5000/api/Values/GetHomePage').subscribe(
      data => {
        if (data != undefined &&
          data.length > 0) {
          this.markers = [{
            lat: data[0]["Latitude"],
            lng: data[0]["Longitude"],
            label: 'A',
            draggable: true,
            Name: data[0]["Name"]
            }];
        }
      });
  };

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 17.451315;
  lng: number = 78.381211;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      Name: ""
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[];
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  Name: string;
}