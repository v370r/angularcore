import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swastik',
  templateUrl: './swastik.component.html',
  styleUrls: ['./swastik.component.css']
})
export class SwastikComponent implements OnInit {
  searchTerm = ""
  itemsCopy =["bandna","apple","corienader","Awdawd","appLe","ApPles"]
  items = this.itemsCopy.slice().map(v => v.toLowerCase())
  mess = [];
  mess2= [];
  ind = 0
  sliced = []
  constructor() { }

  ngOnInit() {
  }

  search(e){
    if (e.target.value !=="")
        {this.mess = this.items.filter((item) => item.startsWith(e.target.value.toLowerCase()))
        // this.mess2 =this.mess.filter( ite  => this.itemsCopy[this.items.indexOf(ite)])

        for(let i=0; i<this.mess.length; i++){
          this.mess2.push(this.itemsCopy[this.items.indexOf(this.mess[i])])
        }
        console.log(this.mess2)
        console.log(this.mess)
        this.sliced =["bandna","apple","corienader","Awdawd","appLe","ApPles"]
        // for (let i = 0; i < this.mess.length; i++) {
        //   this.ind = this.items.indexOf(this.mess[i])
        //   this.sliced = this.itemsCopy.slice(this.ind)
        //   this.mess2.push(this.sliced[0])

        // }
        // console.log(this.mess2)
        }
        else{
          // this.mess2.push()
          this.mess2=[]
        }
        this.ind =0


  }


  }



