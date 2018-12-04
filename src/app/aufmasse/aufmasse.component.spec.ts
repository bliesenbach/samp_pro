import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AufmasseComponent } from './aufmasse.component';

describe('AufmasseComponent', () => {
  let component: AufmasseComponent;
  let fixture: ComponentFixture<AufmasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AufmasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AufmasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
