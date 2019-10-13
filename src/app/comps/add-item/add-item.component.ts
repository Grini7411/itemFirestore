import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item:Item = {Title:"",description:""};
  constructor(private itemServ:ItemService) { }

  ngOnInit() {
  }
  send(ev){
    
    if(this.item.Title != "" && this.item.description != ""){
      this.itemServ.addItem(this.item);
    
      this.item.Title = '';
      this.item.description = '';
      
    }
  }

}
