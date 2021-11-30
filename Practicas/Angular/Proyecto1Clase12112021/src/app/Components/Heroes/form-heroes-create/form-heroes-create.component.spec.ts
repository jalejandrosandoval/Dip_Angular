import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeroesCreateComponent } from './form-heroes-create.component';

describe('FormHeroesCreateComponent', () => {
  let component: FormHeroesCreateComponent;
  let fixture: ComponentFixture<FormHeroesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeroesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeroesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
