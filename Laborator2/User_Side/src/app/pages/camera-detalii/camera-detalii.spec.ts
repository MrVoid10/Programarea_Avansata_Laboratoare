import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraDetaliiComponent } from './camera-detalii';

describe('CameraDetaliiComponent', () => {
  let component: CameraDetaliiComponent;
  let fixture: ComponentFixture<CameraDetaliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraDetaliiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraDetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
