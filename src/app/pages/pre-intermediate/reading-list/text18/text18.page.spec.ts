import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text18Page } from './text18.page';

describe('Text18Page', () => {
  let component: Text18Page;
  let fixture: ComponentFixture<Text18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text18Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
