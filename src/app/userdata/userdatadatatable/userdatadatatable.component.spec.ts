import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdatadatatableComponent } from './userdatadatatable.component';

describe('UserdatadatatableComponent', () => {
  let component: UserdatadatatableComponent;
  let fixture: ComponentFixture<UserdatadatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdatadatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdatadatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
