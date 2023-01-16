import { AfterViewInit, Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Sales } from 'src/app/interfases/sales';

@Component({
  selector: 'app-tabla-sales',
  templateUrl: './tabla-sales.component.html',
  styleUrls: ['./tabla-sales.component.css']
})
export class TablaSalesComponent implements AfterViewInit{

  @Input() displayedColumns: string[] = [
    'orderNumber', 'orderDate','requiredDate','shippedDate','status','comments',
    'customerNumber','productCode','quantityOrdered','priceEach','orderLineNumber',
    'productName','productLine','productVendor','quantityInStock',
    'buyPrice','MSRP'
  ];

  tableHeaders: string[] = [
    'Order Number', 'Order Date','Required Date','Shipped Date','Status','Comments',
    'Customer Number','Product Code','Quantity Ordered','Price Each','Order LineNumber',
    'Product Name','Product Line','Product Vendor','Quantity in Stock',
    'Buy Price','MSRP'
  ];

  @Input() data: Sales[] = [];

  dataSource = new MatTableDataSource<Sales>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Sales>(this.data);
    this.dataSource.paginator = this.paginator;

  }
}
