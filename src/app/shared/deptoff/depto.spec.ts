import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deptoff } from './deptoff';

describe('Deptoff', () => {
  let component: Deptoff;
  let fixture: ComponentFixture<Deptoff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deptoff],
    }).compileComponents();

    fixture = TestBed.createComponent(Deptoff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
