import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerComponent } from './costumer.component';

describe('CostumerComponent', () => {
  let component: CostumerComponent;
  let fixture: ComponentFixture<CostumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
