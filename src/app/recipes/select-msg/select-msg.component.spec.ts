import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMsgComponent } from './select-msg.component';

describe('SelectMsgComponent', () => {
  let component: SelectMsgComponent;
  let fixture: ComponentFixture<SelectMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
