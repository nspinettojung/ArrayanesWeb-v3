import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deptopb } from './deptopb';

describe('Deptopb', () => {
  let component: Deptopb;
  let fixture: ComponentFixture<Deptopb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deptopb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deptopb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
