import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserEditModalComponent } from './user-edit-modal.component';
import { UsersFormComponent } from '@components/users-form/users-form.component';
import { UsersService } from '@services/users.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TranslateModule } from '@ngx-translate/core';

describe('UserEditModalComponent', () => {
  let component: UserEditModalComponent;
  let fixture: ComponentFixture<UserEditModalComponent>;

  let usersServiceSpy: jasmine.SpyObj<UsersService>;
  let dialogRefSpy: jasmine.SpyObj<DynamicDialogRef>;
  let dialogConfigSpy: jasmine.SpyObj<DynamicDialogConfig>;

  beforeEach(waitForAsync(() => {
    usersServiceSpy = jasmine.createSpyObj('UsersService', ['putUser']);
    dialogRefSpy = jasmine.createSpyObj('DynamicDialogRef', ['close']);
    dialogConfigSpy = jasmine.createSpyObj('DynamicDialogConfig', [], {
      data: { user: {} },
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: UsersService, useValue: usersServiceSpy },
        { provide: DynamicDialogRef, useValue: dialogRefSpy },
        { provide: DynamicDialogConfig, useValue: dialogConfigSpy },
      ],
      imports: [
        UsersFormComponent,
        UserEditModalComponent,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form component', () => {
    fixture.detectChanges();

    const usersFormComponent =
      fixture.nativeElement.querySelector('gico-users-form');
    expect(usersFormComponent).toBeTruthy();
  });
});
