import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSaveComponent } from './cloud-save.component';

describe('CloudSaveComponent', () => {
  let component: CloudSaveComponent;
  let fixture: ComponentFixture<CloudSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
