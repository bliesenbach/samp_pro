import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftraegeComponent } from './auftraege.component';

describe('AuftraegeComponent', () => {
  let component: AuftraegeComponent;
  let fixture: ComponentFixture<AuftraegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuftraegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
