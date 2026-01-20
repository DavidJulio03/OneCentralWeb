import { supabase } from '../lib/supabase'

export const productoService = {
  // Obtener todos los productos con su categoría
  async getAll() {
    const { data, error } = await supabase
      .from('productos')
      .select('*, categorias(nombre)')
      .order('nombre', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  // Obtener solo productos en oferta
  async getOfertas() {
    const { data, error } = await supabase
      .from('productos')
      .select('*')
      .not('precio_descuento', 'is', null) // Solo los que tienen descuento
      .gt('stock', 0); // Solo si hay existencias
    
    if (error) throw error;
    return data;
  },

  // Buscar por categoría
  async getByCategoria(slug) {
    const { data, error } = await supabase
      .from('productos')
      .select('*, categorias!inner(*)')
      .eq('categorias.slug', slug);
    
    if (error) throw error;
    return data;
  }
}