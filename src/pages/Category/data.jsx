const CATEGORIES_DATABASE = {
    herramientas: {
        meta: {
            categoryName: "HERRAMIENTAS DE POTENCIA",
            categoryCode: "CAT_PWR_001",
            description: "Equipamiento de alto rendimiento para despliegue industrial.",
            breadcrumbs: ["Home", "Inventario", "Power Tools"]
        },
        labels: {
            searchPlaceholder: "BUSCAR REFERENCIA O NOMBRE...",
            sectionDiscounts: "OFERTAS // PRIORIDAD ALTA",
            sectionAll: "INVENTARIO COMPLETO // ESTADO: ACTIVO",
            noResults: "NO SE ENCONTRARON REGISTROS EN LA MATRIZ DE DATOS.",
            addToCart: "AÑADIR",
            viewDetails: "ESPECIFICACIONES"
        },
        products: [
            {
                id: "SKU_8821_X",
                name: "Taladro Percutor Industrial 20V",
                specs: "Brushless / 2 Bat / Maletín",
                price: 450000,
                discountPrice: 380000,
                stock: 15,
                image: "https://images.unsplash.com/photo-1504148455328-c376907d081c",
                tags: ["HEAVY_DUTY", "PROMO"],
                details: {
                    fullDescription: "Motor sin escobillas para mayor eficiencia y vida útil. Ideal para perforaciones exigentes en concreto y mampostería.",
                    features: ["Mandril de metal 1/2\"", "22 posiciones de torque", "Luz LED de alta visibilidad"],
                    warranty: "3 Años limitada",
                    dimensions: "20.2cm x 18.5cm",
                    weight: "1.6 kg"
                }
            },
            {
                id: "SKU_9901_A",
                name: "Sierra Circular 7-1/4 HP",
                specs: "1800W / Guía Laser / Disco Titanio",
                price: 620000,
                discountPrice: null,
                stock: 8,
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
                tags: ["PRECISION"],
                details: {
                    fullDescription: "Corte preciso y potente para trabajos de carpintería estructural. Sistema de soplado para mantener línea de corte limpia.",
                    features: ["Base de magnesio", "Ajuste de bisel hasta 57°", "Freno eléctrico de seguridad"],
                    warranty: "1 Año",
                    dimensions: "Disco de 184mm",
                    weight: "4.0 kg"
                }
            },
            {
                id: "SKU_7722_B",
                name: "Kit Esmeriladora Angular",
                specs: "4-1/2 Pulgadas / 11000 RPM",
                price: 290000,
                discountPrice: 245000,
                stock: 42,
                image: "https://images.unsplash.com/photo-1616628182501-43f8b6c2c7b2",
                tags: ["BEST_SELLER", "PROMO"],
                details: {
                    fullDescription: "Diseño ergonómico y compacto para trabajos en espacios reducidos. Sistema de protección contra re-arranque.",
                    features: ["Mango lateral ajustable", "Guarda de ajuste rápido", "Escobillas de corte automático"],
                    warranty: "2 Años",
                    dimensions: "Longitud 270mm",
                    weight: "1.8 kg"
                }
            },
            {
                id: "SKU_3310_Z",
                name: "Lijadora Orbital Neumática",
                specs: "6 Pulgadas / Aspiración Central",
                price: 185000,
                discountPrice: null,
                stock: 0,
                image: "https://images.unsplash.com/photo-1602524812300-7a7b87f1d6c1",
                tags: ["NEUMÁTICA"],
                details: {
                    fullDescription: "Herramienta profesional de alta velocidad para acabados finos. Requiere compresor de aire industrial.",
                    features: ["Bajo nivel de vibración", "Regulador de velocidad", "Carcasa de aleación ligera"],
                    warranty: "1 Año",
                    dimensions: "Pad de 150mm",
                    weight: "0.9 kg"
                }
            }
        ]
    },

    pinturas: {
        meta: {
            categoryName: "PINTURAS Y RECUBRIMIENTOS",
            categoryCode: "CAT_PNT_002",
            description: "Soluciones arquitectónicas y protección de superficies.",
            breadcrumbs: ["Home", "Inventario", "Pinturas"]
        },
        labels: {
            searchPlaceholder: "BUSCAR COLOR O TIPO...",
            sectionDiscounts: "LIQUIDACIÓN DE TEMPORADA",
            sectionAll: "CATÁLOGO DE COLOR // VIVO",
            noResults: "NO HAY COINCIDENCIAS EN EL INVENTARIO DE COLOR.",
            addToCart: "AÑADIR",
            viewDetails: "FICHA TÉCNICA"
        },
        products: [
            {
                id: "PNT_992_W",
                name: "Pintura Acrílica Super Lavable",
                specs: "Galón / Blanco Puro / Alta Cobertura",
                price: 85000,
                discountPrice: 68000,
                stock: 120,
                image: "https://images.unsplash.com/photo-1598300053654-2a9a38d6e5f4",
                tags: ["PREMIUM", "PROMO"],
                details: {
                    fullDescription: "Pintura de bajo olor y secado rápido. Resistente a manchas comunes y fácil de limpiar sin desgaste.",
                    features: ["Acabado mate sedoso", "Anti-hongos", "Rendimiento 40m2/gal"],
                    warranty: "Vida útil 5 años",
                    dimensions: "Envase 3.78 Litros",
                    weight: "5.2 kg"
                }
            },
            {
                id: "PNT_112_E",
                name: "Esmalte Sintético Anticorrosivo",
                specs: "0.25 Galón / Negro Mate / Secado Rápido",
                price: 42000,
                discountPrice: null,
                stock: 45,
                image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8",
                tags: ["METAL"],
                details: {
                    fullDescription: "Protección superior para superficies metálicas expuestas a la intemperie. No requiere base anticorrosiva adicional.",
                    features: ["Doble acción (Base + Color)", "Acabado uniforme", "Resistente a rayos UV"],
                    warranty: "Protección 3 años",
                    dimensions: "Envase 0.95 Litros",
                    weight: "1.1 kg"
                }
            }
        ]
    },

    electricidad: {
        meta: {
            categoryName: "MATERIAL ELÉCTRICO",
            categoryCode: "CAT_ELE_003",
            description: "Componentes certificados para instalaciones seguras.",
            breadcrumbs: ["Home", "Inventario", "Electricidad"]
        },
        labels: {
            searchPlaceholder: "BUSCAR CALIBRE O REFERENCIA...",
            sectionDiscounts: "PACKS DE INSTALACIÓN",
            sectionAll: "COMPONENTES ELÉCTRICOS // ACTIVOS",
            noResults: "REGISTRO NO ENCONTRADO EN LA RED.",
            addToCart: "AÑADIR",
            viewDetails: "CERTIFICACIÓN"
        },
        products: [
            {
                id: "ELE_771_C",
                name: "Cable THHN Calibre 12",
                specs: "Rollo 100m / Cobre / Certificación RETIE",
                price: 320000,
                discountPrice: 295000,
                stock: 30,
                image: "https://images.unsplash.com/photo-1581092160613-b9f1c7b8b3b4",
                tags: ["CERTIFICADO", "OBRA"],
                details: {
                    fullDescription: "Conductor de cobre suave con aislamiento termoplástico de PVC y chaqueta de Nylon. Ideal para instalaciones comerciales.",
                    features: ["Resistente al calor y humedad", "Chaqueta deslizante", "Norma UL 83"],
                    warranty: "Certificación RETIE",
                    dimensions: "Longitud 100 Metros",
                    weight: "3.8 kg"
                }
            },
            {
                id: "ELE_220_B",
                name: "Interruptor Térmico 20A",
                specs: "Monopolar / Enchufable / Alta Sensibilidad",
                price: 25000,
                discountPrice: null,
                stock: 200,
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
                tags: ["SEGURIDAD"],
                details: {
                    fullDescription: "Dispositivo de protección contra sobrecargas y cortocircuitos. Compatible con tableros de distribución estándar.",
                    features: ["Capacidad 10kA", "Montaje tipo Plug-in", "Indicador de estado visual"],
                    warranty: "5 Años",
                    dimensions: "1 Polo",
                    weight: "0.12 kg"
                }
            }
        ]
    },

    construccion: {
        meta: {
            categoryName: "MATERIALES DE CONSTRUCCIÓN",
            categoryCode: "CAT_CST_004",
            description: "Suministros estructurales y obra gris.",
            breadcrumbs: ["Home", "Inventario", "Construcción"]
        },
        labels: {
            searchPlaceholder: "BUSCAR MATERIAL...",
            sectionDiscounts: "PRECIOS POR VOLUMEN",
            sectionAll: "BODEGA DE MATERIALES // DISPONIBLE",
            noResults: "SIN REGISTROS EN BODEGA CENTRAL.",
            addToCart: "SOLICITAR",
            viewDetails: "ESPECIFICACIONES"
        },
        products: [
            {
                id: "CST_001_S",
                name: "Cemento Gris Estructural",
                specs: "Saco 50kg / Alta Resistencia / Uso General",
                price: 34000,
                discountPrice: null,
                stock: 500,
                image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
                tags: ["BÁSICOS"],
                details: {
                    fullDescription: "Cemento Portland de alta calidad para fundiciones de placas, vigas y columnas estructurales.",
                    features: ["Secado controlado", "Menor agrietamiento", "Alta adherencia"],
                    warranty: "NTC 121",
                    dimensions: "Empaque Papel Kraft",
                    weight: "50 kg"
                }
            },
            {
                id: "CST_442_A",
                name: "Adhesivo para Cerámica",
                specs: "Saco 25kg / Interiores / Secado Lento",
                price: 28000,
                discountPrice: 22000,
                stock: 85,
                image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
                tags: ["ACABADOS", "PROMO"],
                details: {
                    fullDescription: "Mortero adhesivo de alto desempeño para la instalación de revestimientos en pisos y paredes interiores.",
                    features: ["Fácil mezclado", "Excelente trabajabilidad", "No se descuelga"],
                    warranty: "1 Año",
                    dimensions: "Saco Polipropileno",
                    weight: "25 kg"
                }
            }
        ]
    },

    griferia: {
        meta: {
            categoryName: "GRIFERÍA Y ACCESORIOS",
            categoryCode: "CAT_GRI_005",
            description: "Diseño y funcionalidad para sistemas hidráulicos.",
            breadcrumbs: ["Home", "Inventario", "Grifería"]
        },
        labels: {
            searchPlaceholder: "BUSCAR MODELO O ACABADO...",
            sectionDiscounts: "OFERTAS DE EXHIBICIÓN",
            sectionAll: "SISTEMAS HIDRÁULICOS // CATÁLOGO",
            noResults: "MODELO NO LOCALIZADO EN EL SISTEMA.",
            addToCart: "AÑADIR",
            viewDetails: "DIMENSIONES"
        },
        products: [
            {
                id: "GRI_551_K",
                name: "Mezclador Lavaplatos Monocontrol",
                specs: "Acabado Cromo / Cuello Flexible / Ahorro Agua",
                price: 215000,
                discountPrice: 189000,
                stock: 12,
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
                tags: ["DISEÑO", "PROMO"],
                details: {
                    fullDescription: "Grifería de alta gama con cuello de silicona flexible y salida de agua tipo lluvia o chorro continuo.",
                    features: ["Cuerpo en latón", "Cartucho cerámico 35mm", "Ahorro de agua 40%"],
                    warranty: "10 Años en cuerpo",
                    dimensions: "Altura 450mm",
                    weight: "1.4 kg"
                }
            },
            {
                id: "GRI_882_T",
                name: "Set de Grifería para Ducha",
                specs: "Válvula Mezcladora / ABS Cromo / 4 Pulgadas",
                price: 145000,
                discountPrice: null,
                stock: 25,
                image: "https://images.unsplash.com/photo-1620626011761-9963d7521477",
                tags: ["BAÑO"],
                details: {
                    fullDescription: "Sistema completo de ducha con regadera de gran cobertura y mezclador de temperatura de alta precisión.",
                    features: ["Boquillas anti-calcáreas", "Fácil instalación", "Resistente a corrosión"],
                    warranty: "5 Años",
                    dimensions: "Ducha 10cm Diámetro",
                    weight: "0.8 kg"
                }
            }
        ]
    }
};

export default CATEGORIES_DATABASE;