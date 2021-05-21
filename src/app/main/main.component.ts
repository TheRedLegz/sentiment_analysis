import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sentiment : any;
  color: string | any = "lightgreen";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  async analyze_sentiment(sentence:string) {
    let sentimentJSON: any;
    sentimentJSON = await this.httpClient.get('http://127.0.0.1:5002/sentiment-analysis/' + sentence).toPromise() as JSON
    this.sentiment = sentimentJSON["sentiment"]

    if (this.sentiment == "Positive") {
      this.color = "lightgreen";
    }
    else if (this.sentiment == "Negative") {
      this.color = "red";
    }
    else {
      this.color = "grey";
    }
  }

}
