import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.alunos = " ALUNOS DA LIVE"
  }
  public pontos:number = 0
  public alunos:string | undefined
  public linhas:Item[][]= 
  [
    [
      {
        numero: 1, 
        tipo: "bandeira"
      },
      {
        numero: 2, 
        tipo: "bandeira"
      },{
        numero: 3, 
        tipo: "bandeira"
      },{
        numero: 4, 
        tipo: "bandeira"
      },{
        numero: 5, 
        tipo: "bomba"
      },
    ],
    [
      {
        numero: 1, 
        tipo: "bomba"
      },
      {
        numero: 2, 
        tipo: "bomba"
      },{
        numero: 3, 
        tipo: "bomba"
      },{
        numero: 4, 
        tipo: "bomba"
      },{
        numero: 5, 
        tipo: "bomba"
      },
    ],
    [
      {
        numero: 1, 
        tipo: "bomba"
      },
      {
        numero: 2, 
        tipo: "bomba"
      },{
        numero: 3, 
        tipo: "bandeira"
      },{
        numero: 4, 
        tipo: "bandeira"
      },{
        numero: 5, 
        tipo: "bandeira"
      },
    ]
  ]

  bombaOuBandeira(item:Item){
    if(item.tipo == "bomba"){
      alert("Bomba estourou e vc foi pego no campo minado")
      this.pontos = 0
      return
    }
    this.pontos += 1
  }
}
