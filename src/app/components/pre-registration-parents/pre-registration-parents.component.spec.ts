import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegistrationParentsComponent } from './pre-registration-parents.component';

describe('PreRegistrationParentsComponent', () => {
  let component: PreRegistrationParentsComponent;
  let fixture: ComponentFixture<PreRegistrationParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreRegistrationParentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreRegistrationParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
