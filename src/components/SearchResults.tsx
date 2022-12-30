import { ProductItem } from "./ProdutctItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
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
 * 1. Pure Functional Components
 * 2. Renders to often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */
