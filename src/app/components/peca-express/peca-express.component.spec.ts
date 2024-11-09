import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaExpressComponent } from './peca-express.component';

describe('PecaExpressComponent', () => {
  let component: PecaExpressComponent;
  let fixture: ComponentFixture<PecaExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PecaExpressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PecaExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
