# EOS-Product-Card

Este es un paquete de pruebas sobre despliegues en NPM

### EDGAR OLIVAR

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'eos-product-card'
```

```
<ProductCard
  product={product}
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
```