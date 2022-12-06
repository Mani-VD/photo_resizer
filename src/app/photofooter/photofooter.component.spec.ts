import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotofooterComponent } from './photofooter.component';

describe('PhotofooterComponent', () => {
  let component: PhotofooterComponent;
  let fixture: ComponentFixture<PhotofooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotofooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotofooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
