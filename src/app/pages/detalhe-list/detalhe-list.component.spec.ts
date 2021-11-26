import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheListComponent } from './detalhe-list.component';

describe('DetalheListComponent', () => {
  let component: DetalheListComponent;
  let fixture: ComponentFixture<DetalheListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
