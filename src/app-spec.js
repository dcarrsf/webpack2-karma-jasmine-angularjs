
describe('app', () => {
  it('loads without problems', () => {
    require('./app');
  });
  it('document exists', function() {
    expect($('body')).toExist();
  });
});
