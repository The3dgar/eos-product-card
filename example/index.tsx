import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const App = () => {
  return (
    <>
      <ProductCard
        product={{
          id: '1',
          title: 'Coffee mug - card',
          // img: './coffee-mug.png',
        }}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
        children={({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}
            />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
