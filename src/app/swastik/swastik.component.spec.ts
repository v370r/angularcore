import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwastikComponent } from './swastik.component';

describe('SwastikComponent', () => {
  let component: SwastikComponent;
  let fixture: ComponentFixture<SwastikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwastikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwastikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
