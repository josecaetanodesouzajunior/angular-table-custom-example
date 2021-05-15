import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { PrimeTemplateDirective } from '../prime-template.directive';

@Component({
  selector: 'p-table',
  templateUrl: './p-table.component.html',
  styleUrls: ['./p-table.component.css']
})
export class PTableComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() value: any[] = [];
  colGroupTemplate: TemplateRef<any>;
  headerTemplate: TemplateRef<any>;
  bodyTemplate: TemplateRef<any>;
  footerTemplate: TemplateRef<any>;
  columns: any[];
  @ContentChildren(PrimeTemplateDirective) templates: QueryList<
    PrimeTemplateDirective
  >;

  constructor() {}
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'body':
          this.bodyTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        case 'colgroup':
          this.colGroupTemplate = item.template;
          break;
      }
    });
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    if (simpleChange.columns) {
      console.log(simpleChange.columns.currentValue);
      this.columns = simpleChange.columns.currentValue;
    }
    if (simpleChange.value) {
      console.log(simpleChange.value.currentValue);
      this.value = simpleChange.value.currentValue;
      this.columns = simpleChange.value.currentValue;
    }
  }

  ngOnInit() {}
}
