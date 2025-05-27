import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHComponent } from './gallery-h.component';

describe('GalleryHComponent', () => {
  let component: GalleryHComponent;
  let fixture: ComponentFixture<GalleryHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
