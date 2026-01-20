import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import CATEGORIES_DATABASE from './data';

export const useCategoryData = () => {
  // Obtenemos el slug de la URL (ej: /category/power-tools)
  const { categorySlug } = useParams();

  const categoryData = useMemo(() => {
    // Buscamos en nuestro diccionario. Si no existe, devolvemos null o un default.
    return CATEGORIES_DATABASE[categorySlug] || null;
  }, [categorySlug]);

  return {
    categoryData,
    isLoading: !categoryData,
    categorySlug
  };
};