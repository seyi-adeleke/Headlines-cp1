import Api from '../../src/utils/ArticlesApi';

describe('News Api  Call', () => {
  it('should make a get request', () => {
    const spy = jest.spyOn(Api, 'get');
    const data = Api.get();
    expect(spy).toHaveBeenCalled();
    });
});
