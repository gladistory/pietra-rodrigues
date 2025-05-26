import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {

  isVisible = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // Substitua '/pagina-especifica' pela rota desejada
    this.router.events.subscribe(() => {
      this.isVisible = this.router.url === '/';
    });
  }

  closeOverlay() {
    this.isVisible = false;
  }


}
