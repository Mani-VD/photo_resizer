import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoheaderComponent } from './photoheader.component';

describe('PhotoheaderComponent', () => {
  let component: PhotoheaderComponent;
  let fixture: ComponentFixture<PhotoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
