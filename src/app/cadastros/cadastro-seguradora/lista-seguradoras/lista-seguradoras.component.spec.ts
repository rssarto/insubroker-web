import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeguradorasComponent } from './lista-seguradoras.component';

describe('ListaSeguradorasComponent', () => {
  let component: ListaSeguradorasComponent;
  let fixture: ComponentFixture<ListaSeguradorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSeguradorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSeguradorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
