import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoappComponent } from './photoapp.component';

describe('PhotoappComponent', () => {
  let component: PhotoappComponent;
  let fixture: ComponentFixture<PhotoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
