import { Component, OnInit } from '@angular/core';
import { Services } from '../../services';
import { SharedModule } from '../../shared-module';


@Component({
  selector: 'app-dashboard',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})

export class DashboardComponent implements OnInit{
  productsArray:any=[]
  constructor(
    private services:Services
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.services.getData().subscribe((res:any)=>{
      console.log(res)
      this.productsArray=res.items;
    })
  }

  trimDescription(text: string, limit: number = 20): string {
    if (!text) return '';
    
    const words = text.split(/\s+/).slice(0, limit);
    return words.join(' ') + '...';
  }
  
}
