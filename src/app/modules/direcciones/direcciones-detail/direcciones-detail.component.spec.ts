import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesDetailComponent } from './direcciones-detail.component';

describe('DireccionesDetailComponent', () => {
  let component: DireccionesDetailComponent;
  let fixture: ComponentFixture<DireccionesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
