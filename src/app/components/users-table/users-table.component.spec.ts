import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableComponent } from './users-table.component';
import { TranslateModule } from '@ngx-translate/core';

describe('UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsersTableComponent, TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
