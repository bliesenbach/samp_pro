import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutschriftenComponent } from './gutschriften.component';

describe('GutschriftenComponent', () => {
  let component: GutschriftenComponent;
  let fixture: ComponentFixture<GutschriftenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GutschriftenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutschriftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
