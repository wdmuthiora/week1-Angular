import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDisplayComponent } from './quote-display.component';

describe('QuoteDisplayComponent', () => {
  let component: QuoteDisplayComponent;
  let fixture: ComponentFixture<QuoteDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
