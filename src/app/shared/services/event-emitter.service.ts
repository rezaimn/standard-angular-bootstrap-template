import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventEmitterService {

  constructor() { }
  alertMessage:any=new EventEmitter<any>();
}
