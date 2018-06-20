import { Pipe, PipeTransform } from '@angular/core';

import * as marked from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string): any {
    return this.markdownToHtml(value);
  }

  private markdownToHtml(md: string) {
    return marked(md);
  }
}