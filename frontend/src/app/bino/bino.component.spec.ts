import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BinoComponent } from './bino.component';

describe('BinoComponent', () => {
  let component: BinoComponent;
  let fixture: ComponentFixture<BinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
