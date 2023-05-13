import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environments } from 'src/environments/environments';
import { Moment } from 'src/app/moments';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

import { Comment } from 'src/app/comentarios';
import { ComentService } from 'src/app/services/coment.service';
@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  comment?: Comment;
  iconEdit = faEdit;
  iconDelete = faTimes;
  baseApiUrl = environments.baseApiUrl;
  commentForm!: FormGroup;

  constructor(private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessagesService,
    private commentService: ComentService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.GetMoment(id).subscribe(item => this.moment = item.data);

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number) {
    if (id == null) {
      return;
    }
    await this.momentService.RemoveMomentById(id).subscribe();
    this.messageService.addMessage(`Moment ${id} excluído com sucesso!`);
    this.router.navigate(["/"]);
  }

  async onSubmit(formDirective: FormGroupDirective){
    if(this.commentForm.invalid){
      return;
    }
    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentService.CreateComment(data).subscribe((item) => this.moment!.comments!.push(item.data));

    this.messageService.addMessage("Comentário adicionado!");
    
    //O código abaixo limpa o formulário do html.
    this.commentForm.reset();
    formDirective.resetForm();
  }

}
