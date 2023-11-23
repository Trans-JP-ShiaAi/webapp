import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtiToastComponent } from './cti-toast.component';

describe('CtiToastComponent', () => {
  let component: CtiToastComponent;
  let fixture: ComponentFixture<CtiToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtiToastComponent]
    });
    fixture = TestBed.createComponent(CtiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
