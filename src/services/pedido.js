import { supabase } from '../lib/supabase'

export const pedidoService = {
  async crearPedido(datosCliente, carrito) {
    // 1. Insertar el encabezado del pedido
    const { data: pedido, error: errorPedido } = await supabase
      .from('pedidos')
      .insert([{
        usuario_id: datosCliente.usuario_id || null, // NULL si es invitado
        nombre_cliente_invitado: datosCliente.nombre,
        email_invitado: datosCliente.email,
        telefono_contacto: datosCliente.telefono,
        direccion_envio: datosCliente.direccion,
        total: datosCliente.total,
        metodo_pago: datosCliente.metodo_pago
      }])
      .select()
      .single();

    if (errorPedido) throw errorPedido;

    // 2. Preparar los items (productos) del carrito
    const items = carrito.map(item => ({
      pedido_id: pedido.id,
      producto_id: item.id,
      cantidad: item.cantidad,
      precio_unitario: item.precio_descuento || item.precio_regular // Usa el precio de oferta si existe
    }));

    // 3. Insertar los detalles del pedido
    const { error: errorItems } = await supabase
      .from('pedido_items')
      .insert(items);

    if (errorItems) throw errorItems;

    return pedido;
  }
}