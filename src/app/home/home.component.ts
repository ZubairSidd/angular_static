import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // check if user is logged in
  checkLogin() {
    if (localStorage.getItem("token") != null) return true;
    return false;
  }
}
