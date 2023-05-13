import { Component, OnInit, Input } from '@angular/core';
import { Moment } from 'src/app/moments';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  btnText = "Editar";
  moment!: Moment;

  constructor(private route: ActivatedRoute, private router: Router, private momentService: MomentService, private messageService: MessagesService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.GetMoment(id).subscribe(item => this.moment = item.data);
  }

  async editHandler(moment: Moment) {
    const formData = new FormData();


    formData.append('description', moment.description);
    formData.append('title', moment.title);

    await this.momentService.UpdateMoment(formData, moment.id!).subscribe();
    this.messageService.addMessage(`Moment ${moment.id} atualizado com sucesso!`);
    this.router.navigate(["/"]);
  }
}
