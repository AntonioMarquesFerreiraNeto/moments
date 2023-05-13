import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/moments';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';
@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {
  constructor(private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  btnText: string = "Compartilhar!";

  async createMoment(moment: Moment) {
    const formData = new FormData();
    formData.append("title", moment.title);
    formData.append("description", moment.description);
    if (moment.image) {
      formData.append("image", moment.image);
    }

    this.momentService.CreateMoments(formData).subscribe();
    this.messageService.addMessage('Registrado com sucesso!');
    this.router.navigate(["/"]);
  }

  async editMoment(moment: Moment){
    //
  }

}
