import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicii } from './servicii';

describe('Servicii', () => {
  let component: Servicii;
  let fixture: ComponentFixture<Servicii>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicii]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicii);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
