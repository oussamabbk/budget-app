import { Component, OnInit } from "@angular/core";
import * as EmailValidator from "email-validator";
import { and } from "@angular/router/src/utils/collection";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  nom = " ";
  motdepasse = "";
  veremail = "";
  nombank = "";
  numcompte = "";
  designeerreur = true;
  z = 0;

  ngOnInit() {}

  verifcheck(z) {
    z++;
  }
  verif(naa, mdp1, mdp2, email1, nomb, num, designeerreur) {
    let y = 0;

    if (naa == "") {
      this.nom = "ecrire votre nom";
      y++;
      designeerreur = false;
      console.log(designeerreur);
    }

    if (mdp1 != mdp2 || mdp1 == "") {
      this.motdepasse = "verifier votre mot de passe";
      y++;
    }
    if (EmailValidator.validate(email1) != true) {
      this.veremail = "email Invalide";
      y++;
      designeerreur = false;
      console.log(designeerreur);
    }
    if (nomb == "") {
      this.nombank = "ecrire nom de votre bank";
      y++;
      designeerreur = false;
      console.log(designeerreur);
    }
    const re = new RegExp("^[0-9]*$");
    let x = num.toString();
    if (!re.test(x) || num == "") {
      this.numcompte = " ecrire numero de votre compte";
      y++;
      designeerreur = false;
      console.log(designeerreur);
    }
    if (y == 0 && this.z == 0) {
      this.router.navigate(["/dashboard"]);
    } else {
      designeerreur = false;
      console.log(designeerreur);
    }
  }
}
