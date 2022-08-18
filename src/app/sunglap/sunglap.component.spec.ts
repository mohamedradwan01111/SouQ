import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglapComponent } from './sunglap.component';

describe('SunglapComponent', () => {
  let component: SunglapComponent;
  let fixture: ComponentFixture<SunglapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunglapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunglapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
