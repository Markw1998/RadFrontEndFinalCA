import { Component, OnInit } from "@angular/core";
import { RadApiService } from "src/app/services/rad-api.service";
import { Observable } from "rxjs";
import { IGame } from "./IGame";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public isCollapsed: boolean[] = [];
  Games: IGame[];
  GamesCovers: Array<any> = [];
  selectedGame: any;

  constructor(private _service: RadApiService, private _http: HttpClient) {}

  ngOnInit() {}

  public Testing(inp: string) {
    return this._service.GetGame(inp).subscribe((res) => (this.Games = res));
  }

  public AddToFav(id: number) {
    this.selectedGame = this.Games[id];
    this._service.AddToDbFav(this.selectedGame);
  }

  public GetImages() {
    for (let g of this.Games) {
      this._http
        .get("https://api-v3.igdb.com/covers/" + g.cover + "?fields=url", {
          headers: {
            Accept: "application/json",
            "user-key": "12267b00a06bffcaaa73da05aa3b89be",
          },
        })
        .subscribe((res) => this.GamesCovers.push(res));
    }
    console.log(this.GamesCovers);
  }
}
