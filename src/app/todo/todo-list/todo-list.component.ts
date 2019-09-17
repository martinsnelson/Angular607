import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // public todos: any[]; // undefined
  // shurtcut constructor => ctor tab 
  // public todos: any[] = []; // []
  public todos: Todo[] = []; // []
  public form: FormGroup;
  public title: String = 'Minhas Tarefas';
  public mode: String = 'list';

  constructor(private _formBuilder: FormBuilder) {

    this.form = this._formBuilder.group({
      description: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.load();
    this.loadMoviments();

    // this.todos.push(new Todo(1, 'Comprar pão', false));
    // this.todos.push(new Todo(2, 'Fazer seguro', true));
    // this.todos.push(new Todo(2, 'Cortar cabelo', false));
    // this.todos.push('Comprar pão');
    // this.todos.push( {message: 'T1000'} );
    // this.todos.push( new Date() );
    // this.todos.push(1989);
    // this.todos.push(10.98920);
  }

  ngOnInit() {
  }


  loadMoviments() {
    // dados[parseInt(5)].transactions[parseInt(2)].transaction_values[parseInt(3)].value
    const dados = [
      {
        "day": "2019-07-31",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "SALDO ANTERIOR"
              },
              {
                "key": "Tipo",
                "value": "SALDO ANTERIOR"
              },
              {
                "key": "Valor",
                "value": "677.28"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-05",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "000005336 - REF A RESGATE DE COTAS NO FUNDO TESOURO SIMPLES RF"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "3698.24"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          },
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "DEPOSITO EM C/C VIA CIP - BRUNO REIS DE OLIVEIRA"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "500.0"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-08",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "LIQ BOLSA - subscricao s/ XPML11"
              },
              {
                "key": "Tipo",
                "value": "DÉBITO              "
              },
              {
                "key": "Valor",
                "value": "4616.92"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-13",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "RENDIMENTOS s/ FII KINEA RI CI"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "64.0"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-14",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "RENDIMENTOS s/ FII BTG PACTUAL CORPORATE OFFICE FUND"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "120.0"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-19",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "DIVIDENDOS s/ TAESA UNT     N2"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "156.76"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          },
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "JUROS S/ CAPITAL s/ TAESA UNT     N2"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "50.86"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          },
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "LIQ BOLSA (TAXA DE CUSTÓDIA ESTORNO DE TAXA DE MANUTENÇÃO 0000010260)"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "9.28"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          },
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "000005336 - Contribuição Previdência - Certificado: 905"
              },
              {
                "key": "Tipo",
                "value": "DÉBITO              "
              },
              {
                "key": "Valor",
                "value": "400.0"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          },
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "LIQ BOLSA (TAXA DE CUSTÓDIA TAXA DE MANUTENÇÃO 0000010260)"
              },
              {
                "key": "Tipo",
                "value": "DÉBITO              "
              },
              {
                "key": "Valor",
                "value": "9.28"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-20",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "DEBITO EM C/C VIA CIP - BRUNO REIS DE OLIVEIRA"
              },
              {
                "key": "Tipo",
                "value": "DÉBITO              "
              },
              {
                "key": "Valor",
                "value": "250.0"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-21",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "RENDIMENTOS s/ FII XP MALLSCI"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "57.0"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-23",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "DIVIDENDOS s/ ITAUSA INVESTIMENTOS ITAU S.A. PN"
              },
              {
                "key": "Tipo",
                "value": "CRÉDITO             "
              },
              {
                "key": "Valor",
                "value": "681.0"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      },
      {
        "day": "2019-08-26",
        "transactions": [
          {
            "transaction_label": "Transações de Cash",
            "transaction_values": [
              {
                "key": "Histórico",
                "value": "DEBITO EM C/C VIA CIP - BRUNO REIS DE OLIVEIRA"
              },
              {
                "key": "Tipo",
                "value": "DÉBITO              "
              },
              {
                "key": "Valor",
                "value": "738.22"
              },
              {
                "key": "Conta",
                "value": "5336"
              }
            ]
          }
        ]
      }
    ];

    console.table(dados);
    debugger;

    for (let v1 in dados) {
      console.log(dados[parseInt(v1)].day)
      if (dados[parseInt(v1)].day == "2019-08-19") {
        debugger;
      }

      for (let v2 in dados[parseInt(v1)].transactions) {

        for (let v3 in dados[parseInt(v2)].transactions[parseInt(v2)].transaction_values) {
          if (v3 != "2" && dados[parseInt(v1)].transactions[parseInt(v2)].transaction_values[parseInt(v3)].value != "SALDO ANTERIOR") {
            console.log(dados[parseInt(v1)].transactions[parseInt(v2)].transaction_values[parseInt(v3)].value);
          } else {
            debugger;
          }
        }

      }
    }
    
  }


  add() {
    // let dadosForm = this.form.value; // { description: 'description'}
    let description = this.form.controls['description'].value;
    let id = this.todos.length + 1;
    this.todos.push(new Todo(id, description, false));
    this.save();
    this.clear();
  }


  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }


  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }


  remove(todo: Todo) {
    let index = this.todos.indexOf(todo);
    let pressConfirm = confirm('Tem certeza que deseja excluir ?');
    if (index !== -1 && pressConfirm) {
      this.todos.splice(index, 1);
      this.save();
      console.log(index + ' Removido ' + pressConfirm);
    }
  }


  private clear() {
    this.form.reset();
  }


  // Usando localStorage
  save() {
    let data = JSON.stringify(this.todos); // Json to string
    localStorage.setItem('todos', data);
    this.mode = 'list';
  }


  load() {
    let data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data); // string to json
    }
  }


  changeMode(mode: String) {
    this.mode = mode;
  }

}