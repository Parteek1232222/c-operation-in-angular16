import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredicardsComponent } from './credicards.component';

describe('CredicardsComponent', () => {
  let component: CredicardsComponent;
  let fixture: ComponentFixture<CredicardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CredicardsComponent]
    });
    fixture = TestBed.createComponent(CredicardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
