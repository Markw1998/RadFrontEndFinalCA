import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IGame } from "../comps/home/IGame";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class RadApiService {
  constructor(private _http: HttpClient) {}

  url = "https://localhost:44364";
  isAuthenticated: boolean;

  public GetGame(input: string) {
    var res = this._http.get<any[]>(this.url + "/api/games/" + input);

    return res;
  }

  public DeleteFavGame(game: any) {
    const obj = JSON.parse(localStorage.getItem("auth"));
    const { access_token } = obj;
    const header = new HttpHeaders({ Authorization: `Bearer ${access_token}` });

    this._http
      .post(
        this.url + "/api/games/delete",
        {
          GameName: game.GameName,
          GameDesc: game.GameDesc,
        },
        { headers: header }
      )
      .subscribe((res) => console.log(res));
  }

  public async Login(credentials: FormGroup) {
    const body = new HttpParams()
      .set("username", credentials.get("email").value)
      .set("password", credentials.get("password").value)
      .set("grant_type", "password");

    this._http
      .post(this.url + "/token", body.toString(), {
        headers: new HttpHeaders().set(
          "Content-Type",
          "application/x-www-form-urlencoded"
        ),
      })
      .subscribe((r) => localStorage.setItem("auth", JSON.stringify(r)));
  }

  public AddToDbFav(game: IGame) {
    const obj = JSON.parse(localStorage.getItem("auth"));
    const { access_token } = obj;
    const header = new HttpHeaders({ Authorization: `Bearer ${access_token}` });

    this._http
      .post(
        this.url + "/api/games/" + "add",
        {
          token: access_token,
          GameName: game.name,
          GameDesc: game.summary,
        },
        { headers: header }
      )
      .subscribe((res) => console.log(res));
    console.log(game);
  }

  public Register(credentials: FormGroup) {
    const body = {
      Email: credentials.get("email").value,
      Password: credentials.get("password").value,
      ConfirmPassword: credentials.get("password").value,
    };
    this._http
      .post(this.url + "/api/account/register", body, {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
      })
      .subscribe((r) => console.log(r));
  }
}
