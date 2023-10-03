import './test';

enum testEnum {
  one = 1,
  two,
  three,
}

function log(msg: string | number, c: testEnum[]): void {
  console.log(`${msg} ${c}`);
}

log(`Test`, [testEnum.one, testEnum.two, testEnum.three]);
