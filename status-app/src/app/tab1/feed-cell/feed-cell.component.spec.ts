import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedCellComponent } from './feed-cell.component';

describe('FeedCellComponent', () => {
  let component: FeedCellComponent;
  let fixture: ComponentFixture<FeedCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedCellComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
