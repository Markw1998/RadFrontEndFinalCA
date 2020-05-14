import { Component, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { IGame } from "../home/IGame";
import { RadApiService } from "src/app/services/rad-api.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.css"],
})
export class FavouritesComponent implements OnInit {
  public isCollapsed: boolean[] = [];
  constructor(private _http: HttpClient, private service: RadApiService) {}
  url = "https://localhost:44364";

  Games: any;
  selectedGame: any;

  ngOnInit() {
    const obj = JSON.parse(localStorage.getItem("auth"));
    const { access_token } = obj;
    const header = new HttpHeaders({ Authorization: `Bearer ${access_token}` });

    this._http
      .get(this.url + "/api/games/favourites", { headers: header })
      .subscribe((res) => (this.Games = res));

    console.log(this.Games);
  }

  public DeleteFavGame(game: number) {
    this.selectedGame = this.Games[game];
    this.service.DeleteFavGame(this.selectedGame);
  }
}
