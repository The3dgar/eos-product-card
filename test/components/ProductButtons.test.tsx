import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
  test('should show custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom title" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with product name (context)', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          ()=><ProductTitle />  
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
