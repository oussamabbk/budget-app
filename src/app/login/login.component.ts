import { Component, OnInit } from "@angular/core";
import { relativeTimeRounding } from "moment";
import { Router } from "@angular/router";
import { DashboardComponent } from "app/dashboard/dashboard.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  erreurlogin = "";

  ngOnInit() {}
  showLoginModal() {}
  showRegisterModal() {}
  onedit(email, password) {
    if (email == "admin" && password == "admin") {
      this.router.navigate(["/dashboard"]);
    } else {
      this.erreurlogin = "verifier votre mot de passe";
    }

    console.log(password, email);
    //this.router.navigate(["/dashboard"]);
  }
  gotoregister() {
    this.router.navigate(["/register"]);
  }
}
