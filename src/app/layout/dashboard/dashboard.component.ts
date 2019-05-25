import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {DeleteConfirmationModalComponent} from '../../shared/components/delete-confirmation-modal/delete-confirmation-modal.component';
import {EventEmitterService} from '../../shared/services/event-emitter.service';
import {AlertMessageService} from '../../shared/services/alert-message.service';

/**
 * there are two sections in the template,
 * one is suppose to be displayed for admin and one for users,
 * at first we check if the logged in person is admin or not and the suitable data will be displayed for him.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  modalRef: BsModalRef;
   constructor( private httpService:HttpService,
                private modalService: BsModalService,
                private alertMessageService:AlertMessageService){
   }
   ngOnInit(): void {
     this.getUser(2);
   }
   getUser(id){
     this.httpService.get(`user/${id}`).subscribe(
       (res: any) => {
       }
     );
   }
  openModal() {

     this.alertMessageService.fail('test Title','test message');
    // this.modalRef = this.modalService.show(DeleteConfirmationModalComponent,  {
    //   initialState: {
    //     title: 'Modal title',
    //     data: {}
    //   }
    //
    // });
  }
}
