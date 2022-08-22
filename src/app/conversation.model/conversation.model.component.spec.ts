import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationModelComponent } from './conversation.model.component';

describe('ConversationModelComponent', () => {
  let component: ConversationModelComponent;
  let fixture: ComponentFixture<ConversationModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
