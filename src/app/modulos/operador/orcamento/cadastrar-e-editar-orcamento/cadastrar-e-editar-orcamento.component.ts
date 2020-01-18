import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { Telefone } from 'src/app/model/telefone';
import { Cliente } from 'src/app/model/cliente';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Cep } from 'src/app/model/cep';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Orcamento } from 'src/app/model/orcamento';
import { Produto } from 'src/app/model/produto';
import { Servico } from 'src/app/model/servico';
import { OrcamentoService } from 'src/app/services/orcamento.service';

@Component({
  selector: 'app-cadastrar-e-editar-orcamento',
  templateUrl: './cadastrar-e-editar-orcamento.component.html',
  styleUrls: ['./cadastrar-e-editar-orcamento.component.scss']
})
export class CadastrarEEditarOrcamentoComponent {
  public msgAction: string;
  public objeto = new Orcamento;
  public produto = new Produto();
  public servico = new Servico();
  closeResult: string;

  constructor(private http: HttpClient,
    private cd: ChangeDetectorRef, private modalService: NgbModal, private _orcamentoService: OrcamentoService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id != null) {
        this._orcamentoService.buscarPeloId(params.id).subscribe(data => this.objeto = data);
      }
    })
  }

  /* ! Adicionar/Excluir Telefone e/ou Endereço !  */
  abrirModal(template, size, param) {
    if (param) {
      this.produto = new Produto();
    } else {
      this.servico = new Servico();
    }

    this.modalService.open(template, { size: size, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Dismissed ${this.adicionar(param)}`;
    }, (reason) => {
      this.closeResult = `Closed with: ${reason}`;
    });
  }

  adicionar(param) {
    if (param) {
      this.objeto.produtos.push(this.produto);
    } else {
      this.objeto.servicos.push(this.servico);
    }
  }

  excluir(it, param) {
    if (param) {
      const index = this.objeto.produtos.indexOf(it);
      this.objeto.produtos.splice(index, 1)
    } else {
      const index = this.objeto.servicos.indexOf(it);
      this.objeto.servicos.splice(index, 1)
    };
  }

  /* 
  buscarCep() {
    this.http.get(`https://viacep.com.br/ws/${this.endereco.cep}/json/`).subscribe((data: Cep) => {
      // aplicar retorno aos inputs  
      this.endereco.descricao = data.logradouro;
      this.endereco.bairro = data.bairro;
      this.endereco.cidade = data.localidade;
      this.endereco.uf = data.uf;
    });
  }*/

  public salvarOuAlterar() {
    if (this.objeto.id) {
      this._orcamentoService.alterar(this.objeto.id, this.objeto)
        .subscribe(retorno => {
          if (!retorno) {
            this.redirencionar('Orçamento editado com sucesso.');
          } else {
            this.toastr.error('Erro ao cadastrar.');
          }
        });
    } else {
      this._orcamentoService.salvar(this.objeto).subscribe(retorno => {
        if (!retorno) {
          this.redirencionar('Orçamento cadastrado com sucesso.');
        } else {
          this.toastr.error('Erro ao cadastrar.');
        }
      });
    }
  }

  redirencionar(string) {
    this.toastr.success(string);
    this.router.navigate(['/operador/orcamentos']);
  }


}
