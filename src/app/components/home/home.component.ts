import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { postI } from 'src/app/models/post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  dataSource = new MatTableDataSource<postI>;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private dataService: DataService) {}
 
  ngOnInit() {
    this.dataService.getPosts().subscribe((data: postI[]) => {
      this.dataSource.data = data
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}