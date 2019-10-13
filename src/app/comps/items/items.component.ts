import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from "../../../models/item";



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items1:Item[];

  constructor(private itemServ:ItemService) { }

  ngOnInit() {
    this.itemServ.getItems().subscribe(dataItems=>{
      
      this.items1 = dataItems;
      debugger;
   })
   
  }

}
