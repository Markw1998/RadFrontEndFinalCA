import { Component, OnInit } from "@angular/core";
import { RadApiService } from "src/app/services/rad-api.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  credentialsForm: FormGroup;
  constructor(
    private _service: RadApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  public Register() {
    this._service.Register(this.credentialsForm);
    this.router.navigateByUrl("login");
  }
}
