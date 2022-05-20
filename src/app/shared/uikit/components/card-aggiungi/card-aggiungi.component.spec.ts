import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAggiungiComponent } from './card-aggiungi.component';

describe('CardAggiungiComponent', () => {
  let component: CardAggiungiComponent;
  let fixture: ComponentFixture<CardAggiungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAggiungiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAggiungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
