import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfenixComponent } from './infenix.component';

describe('InfenixComponent', () => {
  let component: InfenixComponent;
  let fixture: ComponentFixture<InfenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfenixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
