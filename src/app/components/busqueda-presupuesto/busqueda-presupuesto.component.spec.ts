import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPresupuestoComponent } from './busqueda-presupuesto.component';

describe('BusquedaPresupuestoComponent', () => {
  let component: BusquedaPresupuestoComponent;
  let fixture: ComponentFixture<BusquedaPresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
