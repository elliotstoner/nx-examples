import { Component } from '@angular/core';

@Component({
  selector: 'nx-example-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  testFunction = (): boolean => {
    console.log('test');
    return true;
  };
}
