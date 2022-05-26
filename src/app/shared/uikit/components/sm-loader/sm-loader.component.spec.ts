import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmLoaderComponent } from './sm-loader.component';

describe('SmLoaderComponent', () => {
  let component: SmLoaderComponent;
  let fixture: ComponentFixture<SmLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
