import React from 'react';
import { shallow } from 'enzyme';

import TravelDealsView from '../travel-deals.view';

describe('TravelDealsView - Unit Test', () => {
  const exampleAsyncActionMock = jest.fn();
  const exampleActionMock = jest.fn();

  it('should render without crashing', () => {
    shallow(
      <TravelDealsView
        exampleAsyncAction={exampleAsyncActionMock}
        exampleAction={exampleActionMock}
      />
    );
  });
});