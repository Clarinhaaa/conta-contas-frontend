import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerParcelasComponent } from './ver-parcelas.component';

describe('VerParcelasComponent', () => {
  let component: VerParcelasComponent;
  let fixture: ComponentFixture<VerParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerParcelasComponent]
    });
    fixture = TestBed.createComponent(VerParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
