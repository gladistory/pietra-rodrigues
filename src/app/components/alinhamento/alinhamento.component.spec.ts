import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinhamentoComponent } from './alinhamento.component';

describe('AlinhamentoComponent', () => {
  let component: AlinhamentoComponent;
  let fixture: ComponentFixture<AlinhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlinhamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlinhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
