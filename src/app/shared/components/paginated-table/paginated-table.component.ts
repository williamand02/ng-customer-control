import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.css']
})
export class PaginatedTableComponent {
  @Input() data: any[] = [];
  @Input() itemsPerPage: number = 5;
  @Input() columns: string[] = [];

  @Input() editFunction: ((item: any) => void) | null = null;
  @Output() deleteAction = new EventEmitter<any>();


  currentPage: number = 1;
  displayedData: any[] = [];

  constructor(private router: Router){}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.currentPage = 1;
      this.updateDisplayedData();
    }
  }

  updateDisplayedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedData = this.data.slice(startIndex, endIndex);
  }

  totalPages(): number {
    if (Array.isArray(this.data)) {
      return Math.ceil(this.data.length / this.itemsPerPage);
    } else {
      return 0;
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedData();
  }

  onDeleteClick(clientId: number): void {
    this.deleteAction.emit(clientId);
  }
}
