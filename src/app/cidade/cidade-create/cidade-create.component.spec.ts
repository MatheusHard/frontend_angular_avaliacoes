import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeCreateComponent } from './cidade-create.component';

describe('CidadeCreateComponent', () => {
  let component: CidadeCreateComponent;
  let fixture: ComponentFixture<CidadeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
