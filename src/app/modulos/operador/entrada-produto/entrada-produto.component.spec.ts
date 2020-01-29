import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaProdutoComponent } from './entrada-produto.component';

describe('EntradaProdutoComponent', () => {
  let component: EntradaProdutoComponent;
  let fixture: ComponentFixture<EntradaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
