import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarContaComponent } from './visualizar-conta.component';

describe('VisualizarContaComponent', () => {
  let component: VisualizarContaComponent;
  let fixture: ComponentFixture<VisualizarContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarContaComponent]
    });
    fixture = TestBed.createComponent(VisualizarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
