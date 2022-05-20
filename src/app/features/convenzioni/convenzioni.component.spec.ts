import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenzioniComponent } from './convenzioni.component';

describe('ConvenzioniComponent', () => {
  let component: ConvenzioniComponent;
  let fixture: ComponentFixture<ConvenzioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenzioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
