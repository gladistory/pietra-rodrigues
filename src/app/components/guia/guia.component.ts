import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-guia',
  imports: [],
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.css'
})
export class GuiaComponent {

  @ViewChild('sessao') sessao!: ElementRef;

  scrollToSection() {
    this.sessao.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
