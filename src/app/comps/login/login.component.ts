import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RadApiService } from "src/app/services/rad-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  credentialsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _service: RadApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  public async Login() {
    this._service.Login(this.credentialsForm);
    this.router.navigate(["home"]);
  }
}
