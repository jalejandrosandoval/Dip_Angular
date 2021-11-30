import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeroesEditComponent } from './form-heroes-edit.component';

describe('FormHeroesEditComponent', () => {
  let component: FormHeroesEditComponent;
  let fixture: ComponentFixture<FormHeroesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeroesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeroesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
