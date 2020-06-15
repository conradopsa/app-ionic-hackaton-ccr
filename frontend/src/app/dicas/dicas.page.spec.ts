import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DicasPage } from './dicas.page';

describe('DicasPage', () => {
  let component: DicasPage;
  let fixture: ComponentFixture<DicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
