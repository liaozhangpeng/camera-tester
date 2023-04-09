import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  devices: MediaDeviceInfo[] = []

  constructor(){}

  ngOnInit(): void {
      this.getDevices()
  }

  getDevices() {
    if (!navigator.mediaDevices?.enumerateDevices) {
      console.log("enumerateDevices() not supported.");
    } else {
      // List cameras and microphones.
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          this.devices = devices;
          // devices.forEach((device) => {
          //   console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
          // });
        })
        .catch((err) => {
          console.error(`${err.name}: ${err.message}`);
        });
    }
  }
}
