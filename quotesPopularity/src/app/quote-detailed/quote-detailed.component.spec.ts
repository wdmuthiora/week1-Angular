import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailedComponent } from './quote-detailed.component';

describe('QuoteDetailedComponent', () => {
  let component: QuoteDetailedComponent;
  let fixture: ComponentFixture<QuoteDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
