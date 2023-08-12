import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCRUDService } from '../../../shared/services/user-crud.service';

@Component({
  selector: 'loki-fullstack-delete-user-modal',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss'],
})
export class DeleteUserModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private apiService: UserCRUDService
  ) {}

  @Input() country = 'delete record!';
  @Input() id!: string;

  onConfirmDelete() {
    //************* SHOULD BE IN EFFECT INSTEAD *************//
    this.apiService.deleteOne(this.id).subscribe(() => {
      this.activeModal.close('delete');
    });
  }
}
