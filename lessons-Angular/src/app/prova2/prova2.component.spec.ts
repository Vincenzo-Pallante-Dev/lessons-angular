import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova2Component } from './prova2.component';

describe('Prova2Component', () => {
  let component: Prova2Component;
  let fixture: ComponentFixture<Prova2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Prova2Component]
    });
    fixture = TestBed.createComponent(Prova2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
