import {AfterViewInit, ChangeDetectorRef, Component, ViewChild , Input, SimpleChanges} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FeriadoTabla } from 'src/app/interfases/feriado-tabla';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {

  @Input() displayedColumns: string[] = ['fecha', 'feriado'];

  @Input() data: FeriadoTabla[] = [];

  dataSource = new MatTableDataSource<FeriadoTabla>();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FeriadoTabla>(this.data);
    this.dataSource.paginator = this.paginator;

  }
}

