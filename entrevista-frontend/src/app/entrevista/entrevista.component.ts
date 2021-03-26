import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//import swal from 'sweetalert';

declare var Chart: any;
declare const showMessage: any;

export interface Entrevista {
  pesquisa: number,
  folha: number,
  pergunta: number,
  opcaoResposta: String,
}


@Component({
  selector: 'app-Entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {

  dados!: FormGroup;

  entrevistas: Entrevista[] = [];
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dados = this.formBuilder.group({
      pesquisa: [null, [Validators.required]],
      folha: [null, [Validators.required]],
      pergunta: [null, [Validators.required]],
      opcaoResposta: [null, [Validators.required]],
    });
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
  }

  chamarDados() {
    axios.post('http://localhost:8080/api/dados/initDB', {
      headers: { authorization: localStorage.getItem('token') }}
      ).then(() => {
      console.log('foi');
    }).catch((error) => {
      console.log(error.response)
    });
  }


  salvarForms() {
    
    if(this.dados.invalid) {
      return;
    }

    const criarEntrevista = {
      pesquisa: this.dados.value.pesquisa,
      folha: this.dados.value.folha,
      pergunta: this.dados.value.pergunta,
      opcaoResposta: this.dados.value.opcaoResposta,
    }

    this.entrevistas.push(criarEntrevista);

  }

  enviarDados() {
    axios.post('http://localhost:8080/api/dados/enviar-entrevistados',this.entrevistas, {
      headers: { authorization: localStorage.getItem('token') }}).then(() => {
      console.log('foi');
    }).catch((error) => {
      console.log(error.response)
    });
  }
}
