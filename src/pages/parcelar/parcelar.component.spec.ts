import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelarComponent } from './parcelar.component';

describe('ParcelarComponent', () => {
  let component: ParcelarComponent;
  let fixture: ComponentFixture<ParcelarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelarComponent]
    });
    fixture = TestBed.createComponent(ParcelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
