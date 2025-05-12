import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { OverlayComponent } from "./components/overlay/overlay.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, OverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site-mentoria';
}
