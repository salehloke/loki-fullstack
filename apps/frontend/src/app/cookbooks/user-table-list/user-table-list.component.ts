import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, take, tap } from 'rxjs';
import { UserCRUDService } from '../../shared/services/user-crud.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { DeleteUserModalComponent } from './delete-user-form/delete-user-modal.component';
import { UpdateUserModalComponent } from './update-user-modal/update-user-modal.component';

@Component({
  selector: 'loki-fullstack-user-table-list',
  standalone: true,
  imports: [CommonModule, MatIconModule,],
  templateUrl: './user-table-list.component.html',
  styleUrls: ['./user-table-list.component.scss'],
})
export class UserTableListComponent {
  isLoading = false;

  isLoadingSignal = signal(true);
  tableList$ = new BehaviorSubject<any>([]);

  constructor(
    public apiService: UserCRUDService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService.getAll().subscribe((data) => {
      this.tableList$.next(data);
      this.isLoadingSignal.set(false);
    });
  }

  openDeleteRecordConfirmationDialog(id: string, username: string) {
    const modalDeleteRecord = this.modalService.open(DeleteUserModalComponent);

    // pass id to modal component, required for delete request
    // pass country to modal component, required for display
    modalDeleteRecord.componentInstance.id = id;
    // modalDeleteRecord.componentInstance.country = country

    modalDeleteRecord.closed
      .pipe(
        take(1),
        tap((reason) => {
          if (reason === 'delete') {
            this.toastr.success('Record deleted');
            this.apiService.getAll().subscribe();
          }
        })
      )
      .subscribe();
  }

  openUpdateConfirmationDialog(id: string, username: string) {
    const modalRef = this.modalService.open(UpdateUserModalComponent);
    modalRef.componentInstance.id = id;

    modalRef.closed
      .pipe(
        take(1),
        tap((reason) => {
          if (reason === 'update') {
            this.toastr.success('Record updated');
            this.apiService.getAll().subscribe();
          }
        })
      )
      .subscribe();
  }

  get allUsers() {
    return this.apiService.allUsers();
  }
}
