import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompleteOrderPage } from './complete-order.page';

describe('CompleteOrderPage', () => {
  let component: CompleteOrderPage;
  let fixture: ComponentFixture<CompleteOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompleteOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
