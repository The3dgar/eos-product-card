import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ProductCard } from '../../src';
import { product1 } from '../data/product';

describe('ProductCard', () => {
  test('should show component', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <div>Custom content</div>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(+2)}>Increase</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();
    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('2');
  });
});
