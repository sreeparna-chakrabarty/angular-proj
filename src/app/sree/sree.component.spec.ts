import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SreeComponent } from './sree.component';

describe('SreeComponent', () => {
  let component: SreeComponent;
  let fixture: ComponentFixture<SreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
