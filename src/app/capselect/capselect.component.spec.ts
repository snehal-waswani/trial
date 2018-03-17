import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapselectComponent } from './capselect.component';

describe('CapselectComponent', () => {
  let component: CapselectComponent;
  let fixture: ComponentFixture<CapselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
