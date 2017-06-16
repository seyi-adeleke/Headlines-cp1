import React from 'react';
import { shallow } from 'enzyme';

import store from '../../src/store/articlesStore.js'
import toJson from 'enzyme-to-json';

import Section2 from '../../src/components/Body/Section2';

jest.mock('../../src/components/Body/Section2.jsx');
describe('section2 Component', () => {
  const props = {
    data: store.getList().list,
  };
 it('should match the Section snapshot', () => {
    const component = shallow(<Section2 {...props} />);
    const tree = toJson(component);
     expect(tree).toMatchSnapshot();
  });
});
