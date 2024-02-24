import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListPageComponent } from './user-list-page.component';
import { TranslateModule } from '@ngx-translate/core';

describe('UserListPageComponent', () => {
  let component: UserListPageComponent;
  let fixture: ComponentFixture<UserListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserListPageComponent, TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(UserListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
