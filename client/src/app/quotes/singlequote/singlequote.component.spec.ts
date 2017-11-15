import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglequoteComponent } from './singlequote.component';

describe('SinglequoteComponent', () => {
  let component: SinglequoteComponent;
  let fixture: ComponentFixture<SinglequoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglequoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
