import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import "moment/locale/fr";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate;
  
  constructor() { }

  ngOnInit() {
    this.currentDate = moment()
    .locale("fr")
    .format("YYYY");
    
  }

}
