import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSeguradoraComponent } from './cadastro-seguradora.component';

describe('CadastroSeguradoraComponent', () => {
  let component: CadastroSeguradoraComponent;
  let fixture: ComponentFixture<CadastroSeguradoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSeguradoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSeguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
