import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; // Test router component.
import { Home } from '.';

describe('Home snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
