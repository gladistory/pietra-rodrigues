import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector: 'app-combo-tjsc',
    imports: [],
    templateUrl: './combo-tjsc.component.html',
    styleUrl: './combo-tjsc.component.css'
  })
 export class ComboTjscComponent {
    constructor(private http: HttpClient) { }
  }