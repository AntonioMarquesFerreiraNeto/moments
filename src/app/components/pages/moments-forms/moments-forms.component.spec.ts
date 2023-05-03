import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsFormsComponent } from './moments-forms.component';

describe('MomentsFormsComponent', () => {
  let component: MomentsFormsComponent;
  let fixture: ComponentFixture<MomentsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
