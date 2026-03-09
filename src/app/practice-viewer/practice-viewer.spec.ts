import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeViewer } from './practice-viewer';

describe('PracticeViewer', () => {
  let component: PracticeViewer;
  let fixture: ComponentFixture<PracticeViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
