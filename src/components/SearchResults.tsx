import { useMemo } from "react";
import { ProductItem } from "./ProdutctItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
      return results.reduce((total, product) => {
        return total + product.price;
      }, 0);
    }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem product={product} />
        )
      })}
    </div>
  )
}

// COMO ACONTECE A (RE-)RENDERIZAÇÃO NO REACT
/**
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houver alterações, vai atualizar o que alterou
 */

// QUANDO UTILIZAR O MEMO
/**
 * 1. Pure Functional Components => "Pure" significa que dados os mesmo parametros, retornam o mesmo resultado
 * 2. Renders to often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */
