import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-conta-pagar-receber',
  templateUrl: './listar-conta-pagar-receber.component.html',
  styleUrls: ['./listar-conta-pagar-receber.component.scss']
})

export class ListarContaPagarReceberComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  @Input() lista;
  @Output() eventoPaginar = new EventEmitter();
  @Output() eventoOrdenar = new EventEmitter();
  @Output() eventoExcluir = new EventEmitter();
  @Output() eventoInformarPagamento = new EventEmitter();
  @Output() eventoAlterarSenha = new EventEmitter();

  parametrosPaginacao = ({}) as BuscaEntity;
  paginaAtual: any;
  excluirId: any;

  ngOnInit(): void {
    this.parametrosPaginacao = new BuscaEntity();
    this.parametrosPaginacao.offset = 0;
    this.parametrosPaginacao.limit = 10;
  }

  public search(params) {
    this.parametrosPaginacao.offset = 10 * (params.page - 1);
    this.paginaAtual = params.page;
    this.eventoPaginar.emit(params);
  }

  public ordenar(params) {
    this.eventoOrdenar.emit(params);
  }

  public excluir(it, acao) {
    this.eventoExcluir.emit({ it, acao });
  }

  public informarPagamento(obj) {
    this.eventoInformarPagamento.emit(obj);
    console.log(obj);
  }
}

export class BuscaEntity {
  limit: number;
  descricao?: string;
  offset: number;

}
