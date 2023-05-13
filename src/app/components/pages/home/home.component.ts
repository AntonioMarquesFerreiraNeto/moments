import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/moments';
import { MomentService } from 'src/app/services/moment.service';
import { environments } from 'src/environments/environments';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listMoments: Moment[] = [];
  listMomentsAll: Moment[] = [];
  faSearch = faSearch;
  inputPesquisa = "";
  baseApiUrl = environments.baseApiUrl;
  constructor(private momentService: MomentService) {

  }
  ngOnInit(): void {
    this.momentService.GetMoments().subscribe(
      (itens) => {
        const data = itens.data

        data.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
        });

        this.listMoments = data;
        this.listMomentsAll = data;
      }
    );
  }

  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this.listMoments = this.listMomentsAll.filter((x) => {
      return x.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
  }
}
