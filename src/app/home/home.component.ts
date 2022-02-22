import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  userInfo$: Observable<any> = new Observable();

  constructor(private data: DataService) {}
  ngOnInit () {
    this.userInfo$ = this.data.getUserInfo();
  };
}
