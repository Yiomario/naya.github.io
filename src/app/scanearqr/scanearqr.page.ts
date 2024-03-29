import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-scanearqr',
  templateUrl: './scanearqr.page.html',
  styleUrls: ['./scanearqr.page.scss'],
})
export class ScanearqrPage implements OnInit {
  code: any;

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data:', barcodeData);
    }).catch(err => {
      console.log('Error scanning barcode:', err);
    });
  }
}
