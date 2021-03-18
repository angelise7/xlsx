import { Component } from '@angular/core';

import * as XLSX from 'xlsx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sheetFormat: any;

  handleFile(event: any): void {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e: any) => {
      const data = e.target.result;
      const wb = XLSX.read(data, { type: 'binary' });
      console.log(wb)
      let sheet = wb.Sheets['Sheet0'];
      for (let item in sheet) {
        delete sheet[item].r;
        delete sheet[item].h;
      }
      this.sheetFormat = JSON.stringify(sheet);
    };

  }
}
