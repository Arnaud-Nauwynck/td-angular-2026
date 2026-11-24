import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildNumberValue } from './child-number-value';

describe('ChildNumberValue', () => {
  let component: ChildNumberValue;
  let fixture: ComponentFixture<ChildNumberValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNumberValue],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildNumberValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
