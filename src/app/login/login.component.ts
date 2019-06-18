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
  verif = " ";
  constructor(private router: Router) {}

  ngOnInit() {}
  showLoginModal() {}
  showRegisterModal() {}
  onedit(email, password, verif) {
    if (email == "admin" && password == "admin") {
      this.router.navigate(["/dashboard"]);
    } else {
      this.verif = "verifier votre mot de passe";
    }
    console.log(password, email, verif);
    //this.router.navigate(["/dashboard"]);
  }
  newcompte() {}
}
