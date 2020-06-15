import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionarioPage } from './questionario.page';

describe('QuestionarioPage', () => {
  let component: QuestionarioPage;
  let fixture: ComponentFixture<QuestionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
