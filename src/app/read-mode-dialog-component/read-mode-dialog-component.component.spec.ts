import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadModeDialogComponent } from './read-mode-dialog-component.component';

describe('ReadModeDialogComponentComponent', () => {
  let component: ReadModeDialogComponent;
  let fixture: ComponentFixture<ReadModeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadModeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadModeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
