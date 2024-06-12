import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybinidingComponent } from './propertybiniding.component';

describe('PropertybinidingComponent', () => {
  let component: PropertybinidingComponent;
  let fixture: ComponentFixture<PropertybinidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertybinidingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertybinidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
