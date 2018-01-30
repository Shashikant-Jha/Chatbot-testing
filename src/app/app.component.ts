import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {read, IWorkBook} from 'ts-xlsx';
import {IWorkSheet} from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  baseUrl = 'https://api.dialogflow.com/v1/query?v=20150910';
  accessToken = '4d93317815ac459da6f2783287b5f375';
  testSet = {};
  resultVal: Array<any> = [];
  counter = 0;
  tableView = false;
  testResult = {
    'totalTests': 0,
    'passedTests': 0,
    'failedTests': 0,
    'accuracyPercentage': 0.0
  };
  constructor(private http: HttpClient) { }

  startTesting() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.accessToken);

    for (let key in this.testSet) {
      if (this.testSet.hasOwnProperty(key)) {
        this.http.post(this.baseUrl, JSON.stringify({ query: key, lang: 'en', sessionId: 'abc123' }), { headers })
          .subscribe(res => {
            this.validateResults(res, this.testSet[key], key);
          },
          err => console.log(err));
      }
    }

    this.tableView = true;
  }

  validateResults(res, eR, query) {
    this.counter = 0;
    this.testResult.totalTests = this.testResult.totalTests + 1;
    if (res.result.fulfillment.speech == eR) {
      const jsonRes = {
        'queryText': query,
        'expectedResult': eR,
        'actualResult': res.result.fulfillment.speech,
        'resultValue': 'success'
      };
      this.resultVal.push(jsonRes);
      this.testResult.passedTests = this.testResult.passedTests + 1;
    } else {
      const jsonRes = {
        'queryText': query,
        'expectedResult': eR,
        'actualResult': res.result.fulfillment.messages[0].speech,
        'resultValue': 'failure'
      };
      this.resultVal.push(jsonRes);
      this.testResult.failedTests = this.testResult.failedTests + 1;
    }
    this.counter++;
  }

  generatePDF(e) {
      e.preventDefault();
      const date = new Date().toDateString();
      const head = ['Query', 'Expected Result', 'Actual Result', 'Result'];
      const title = 'Chatbot testing report';
      const options = {
      showTitle: true,
      showLabels: true,
      headers: head,
      title: title
  };
  // tslint:disable-next-line:no-unused-expression
  new Angular2Csv(this.resultVal, 'Chatbot report ' + date, options);
  }

  upload() {
    const point = this;
    const file = (<HTMLInputElement>document.getElementById('fileForUpload')).files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = function (evt) {
         point.testSet = JSON.parse(evt.target['result']);
      };
      reader.onerror = function (evt) {
         console.log(evt.error);
      };
  } else if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onloadend = function (evt) {
      const wb: IWorkBook = read(evt.target['result'], {type: 'binary'});
      const strlen = (wb.Sheets.Sheet1['!ref']).split('B');
      for (let i = 1; i <= strlen[1]; i++) {
        const jsonKey = (wb.Sheets.Sheet1['A' + i]).v;
        const jsonValue = (wb.Sheets.Sheet1['B' + i]).v;
        point.testSet[jsonKey] = jsonValue;
  }
  };
}
  }
}
