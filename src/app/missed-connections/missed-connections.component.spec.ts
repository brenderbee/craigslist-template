import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedConnectionsComponent } from './missed-connections.component';

describe('MissedConnectionsComponent', () => {
  let component: MissedConnectionsComponent;
  let fixture: ComponentFixture<MissedConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
