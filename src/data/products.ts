import fridge1 from "@/assets/products/fridge-1.jpg";
import fridge2 from "@/assets/products/fridge-2.jpg";
import fridge3 from "@/assets/products/fridge-3.jpg";
import fridge4 from "@/assets/products/fridge-4.jpg";
import stove1 from "@/assets/products/stove-1.jpg";
import stove2 from "@/assets/products/stove-2.jpg";
import stove3 from "@/assets/products/stove-3.jpg";
import stove4 from "@/assets/products/stove-4.jpg";
import microwave1 from "@/assets/products/microwave-1.jpg";
import microwave2 from "@/assets/products/microwave-2.jpg";
import microwave3 from "@/assets/products/microwave-3.jpg";
import microwave4 from "@/assets/products/microwave-4.jpg";
import washer1 from "@/assets/products/washer-1.jpg";
import washer2 from "@/assets/products/washer-2.jpg";
import washer3 from "@/assets/products/washer-3.jpg";
import washer4 from "@/assets/products/washer-4.jpg";
import dryer1 from "@/assets/products/dryer-1.jpg";
import dryer2 from "@/assets/products/dryer-2.jpg";
import dryer3 from "@/assets/products/dryer-3.jpg";
import dryer4 from "@/assets/products/dryer-4.jpg";
import blender1 from "@/assets/products/blender-1.jpg";
import blender2 from "@/assets/products/blender-2.jpg";
import blender3 from "@/assets/products/blender-3.jpg";
import blender4 from "@/assets/products/blender-4.jpg";
import airfryer1 from "@/assets/products/airfryer-1.jpg";
import airfryer2 from "@/assets/products/airfryer-2.jpg";
import airfryer3 from "@/assets/products/airfryer-3.jpg";
import airfryer4 from "@/assets/products/airfryer-4.jpg";
import coffee1 from "@/assets/products/coffee-1.jpg";
import coffee2 from "@/assets/products/coffee-2.jpg";
import coffee3 from "@/assets/products/coffee-3.jpg";
import coffee4 from "@/assets/products/coffee-4.jpg";
import vacuum1 from "@/assets/products/vacuum-1.jpg";
import vacuum2 from "@/assets/products/vacuum-2.jpg";
import vacuum3 from "@/assets/products/vacuum-3.jpg";
import vacuum4 from "@/assets/products/vacuum-4.jpg";
import iron1 from "@/assets/products/iron-1.jpg";
import iron2 from "@/assets/products/iron-2.jpg";
import iron3 from "@/assets/products/iron-3.jpg";
import iron4 from "@/assets/products/iron-4.jpg";
import cookware1 from "@/assets/products/cookware-1.jpg";
import cookware2 from "@/assets/products/cookware-2.jpg";
import cookware3 from "@/assets/products/cookware-3.jpg";
import cookware4 from "@/assets/products/cookware-4.jpg";
import cutlery1 from "@/assets/products/cutlery-1.jpg";
import cutlery2 from "@/assets/products/cutlery-2.jpg";
import cutlery3 from "@/assets/products/cutlery-3.jpg";
import cutlery4 from "@/assets/products/cutlery-4.jpg";
import towels1 from "@/assets/products/towels-1.jpg";
import towels2 from "@/assets/products/towels-2.jpg";
import towels3 from "@/assets/products/towels-3.jpg";
import towels4 from "@/assets/products/towels-4.jpg";
import containers1 from "@/assets/products/containers-1.jpg";
import containers2 from "@/assets/products/containers-2.jpg";
import containers3 from "@/assets/products/containers-3.jpg";
import containers4 from "@/assets/products/containers-4.jpg";
import silverware1 from "@/assets/products/silverware-1.jpg";
import silverware2 from "@/assets/products/silverware-2.jpg";
import silverware3 from "@/assets/products/silverware-3.jpg";
import silverware4 from "@/assets/products/silverware-4.jpg";
import cuttingboard1 from "@/assets/products/cuttingboard-1.jpg";
import cuttingboard2 from "@/assets/products/cuttingboard-2.jpg";
import cuttingboard3 from "@/assets/products/cuttingboard-3.jpg";
import cuttingboard4 from "@/assets/products/cuttingboard-4.jpg";
import knifeset1 from "@/assets/products/knifeset-1.jpg";
import knifeset2 from "@/assets/products/knifeset-2.jpg";
import knifeset3 from "@/assets/products/knifeset-3.jpg";
import knifeset4 from "@/assets/products/knifeset-4.jpg";
import dinnerware1 from "@/assets/products/dinnerware-1.jpg";
import dinnerware2 from "@/assets/products/dinnerware-2.jpg";
import dinnerware3 from "@/assets/products/dinnerware-3.jpg";
import dinnerware4 from "@/assets/products/dinnerware-4.jpg";
import glasses1 from "@/assets/products/glasses-1.jpg";
import glasses2 from "@/assets/products/glasses-2.jpg";
import glasses3 from "@/assets/products/glasses-3.jpg";
import glasses4 from "@/assets/products/glasses-4.jpg";
import wineglasses1 from "@/assets/products/wineglasses-1.jpg";
import wineglasses2 from "@/assets/products/wineglasses-2.jpg";
import wineglasses3 from "@/assets/products/wineglasses-3.jpg";
import wineglasses4 from "@/assets/products/wineglasses-4.jpg";
import cakepan1 from "@/assets/products/cakepan-1.jpg";
import cakepan2 from "@/assets/products/cakepan-2.jpg";
import cakepan3 from "@/assets/products/cakepan-3.jpg";
import cakepan4 from "@/assets/products/cakepan-4.jpg";
import bakingsheet1 from "@/assets/products/bakingsheet-1.jpg";
import bakingsheet2 from "@/assets/products/bakingsheet-2.jpg";
import bakingsheet3 from "@/assets/products/bakingsheet-3.jpg";
import bakingsheet4 from "@/assets/products/bakingsheet-4.jpg";
import strainer1 from "@/assets/products/strainer-1.jpg";
import strainer2 from "@/assets/products/strainer-2.jpg";
import strainer3 from "@/assets/products/strainer-3.jpg";
import strainer4 from "@/assets/products/strainer-4.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Geladeira Frost Free Inox 450L",
    price: 3499.90,
    description: "Geladeira moderna com tecnologia Frost Free, acabamento em inox e capacidade de 450 litros. Perfeita para famílias grandes, com prateleiras ajustáveis e design elegante.",
    features: [
      "Capacidade: 450 litros",
      "Tecnologia Frost Free",
      "Acabamento em inox",
      "Prateleiras ajustáveis",
      "Gavetas para frutas e verduras",
      "Controle de temperatura digital",
      "Selo Procel A",
      "Garantia de 1 ano"
    ],
    images: [fridge1, fridge2, fridge3, fridge4]
  },
  {
    id: 2,
    name: "Fogão 4 Bocas Inox com Forno",
    price: 1299.90,
    description: "Fogão robusto com 4 bocas, forno espaçoso e acabamento em inox. Ideal para o dia a dia, com acendimento automático e timer integrado.",
    features: [
      "4 bocas em inox",
      "Forno grande com grill",
      "Acendimento automático",
      "Timer digital",
      "Prateleiras do forno removíveis",
      "Tampa de vidro temperado",
      "Mesa inox",
      "Garantia de 1 ano"
    ],
    images: [stove1, stove2, stove3, stove4]
  },
  {
    id: 3,
    name: "Micro-ondas 30L Inox",
    price: 599.90,
    description: "Micro-ondas com capacidade de 30 litros, acabamento em inox e múltiplas funções pré-programadas. Perfeito para aquecer e preparar refeições rápidas.",
    features: [
      "Capacidade: 30 litros",
      "10 níveis de potência",
      "Painel digital",
      "Timer de 60 minutos",
      "Descongelamento automático",
      "Acabamento em inox",
      "Prato giratório removível",
      "Garantia de 1 ano"
    ],
    images: [microwave1, microwave2, microwave3, microwave4]
  },
  {
    id: 4,
    name: "Máquina de Lavar Roupas 12kg",
    price: 2199.90,
    description: "Máquina de lavar de alta capacidade com tecnologia de lavagem inteligente. Economiza água e energia enquanto cuida das suas roupas.",
    features: [
      "Capacidade: 12kg",
      "15 programas de lavagem",
      "Lavagem a vapor",
      "Inverter motor",
      "Painel LED",
      "Função anti-rugas",
      "Nível de água automático",
      "Garantia de 1 ano"
    ],
    images: [washer1, washer2, washer3, washer4]
  },
  {
    id: 5,
    name: "Secadora de Roupas 10kg",
    price: 1899.90,
    description: "Secadora moderna com múltiplos programas de secagem. Cuida dos tecidos com delicadeza e eficiência, perfeita para dias chuvosos.",
    features: [
      "Capacidade: 10kg",
      "10 programas de secagem",
      "Sensor de umidade",
      "Tecnologia anti-amassado",
      "Filtro de fiapos removível",
      "Painel digital",
      "Baixo consumo de energia",
      "Garantia de 1 ano"
    ],
    images: [dryer1, dryer2, dryer3, dryer4]
  },
  {
    id: 6,
    name: "Liquidificador Turbo 1000W",
    price: 249.90,
    description: "Liquidificador potente com motor de 1000W e lâminas em aço inox. Ideal para preparar vitaminas, sopas e receitas diversas.",
    features: [
      "Potência: 1000W",
      "12 velocidades",
      "Função pulsar",
      "Jarra de vidro 2L",
      "Lâminas em aço inox",
      "Base antiderrapante",
      "Copo dosador incluído",
      "Garantia de 1 ano"
    ],
    images: [blender1, blender2, blender3, blender4]
  },
  {
    id: 7,
    name: "Air Fryer Digital 5L",
    price: 499.90,
    description: "Fritadeira sem óleo com capacidade de 5 litros e painel digital. Prepare alimentos mais saudáveis com praticidade e sabor.",
    features: [
      "Capacidade: 5 litros",
      "Temperatura até 200°C",
      "Timer de 60 minutos",
      "Painel digital touchscreen",
      "8 programas pré-definidos",
      "Cesto removível antiaderente",
      "Desligamento automático",
      "Garantia de 1 ano"
    ],
    images: [airfryer1, airfryer2, airfryer3, airfryer4]
  },
  {
    id: 8,
    name: "Cafeteira Expresso Automática",
    price: 899.90,
    description: "Cafeteira expresso com moedor integrado e sistema de espuma de leite. Prepare cafés profissionais em casa com apenas um toque.",
    features: [
      "Pressão: 19 bar",
      "Moedor integrado",
      "Sistema de espuma de leite",
      "Reservatório 1.8L",
      "Painel LCD",
      "Controle de temperatura",
      "Bandeja coletora removível",
      "Garantia de 1 ano"
    ],
    images: [coffee1, coffee2, coffee3, coffee4]
  },
  {
    id: 9,
    name: "Aspirador de Pó 2000W",
    price: 399.90,
    description: "Aspirador de pó potente com filtro HEPA e múltiplos acessórios. Limpeza profunda para todos os tipos de superfície.",
    features: [
      "Potência: 2000W",
      "Filtro HEPA lavável",
      "Capacidade: 2.5L",
      "Raio de ação 9 metros",
      "5 acessórios incluídos",
      "Controle de sucção",
      "Rodas 360°",
      "Garantia de 1 ano"
    ],
    images: [vacuum1, vacuum2, vacuum3, vacuum4]
  },
  {
    id: 10,
    name: "Ferro a Vapor Profissional",
    price: 179.90,
    description: "Ferro a vapor com sola de cerâmica e vapor vertical. Elimina rugas rapidamente e cuida dos tecidos com delicadeza.",
    features: [
      "Potência: 2400W",
      "Sola cerâmica",
      "Vapor vertical",
      "Sistema anti-gotejamento",
      "Reservatório 300ml",
      "Auto-limpeza",
      "Cabo giratório 360°",
      "Garantia de 1 ano"
    ],
    images: [iron1, iron2, iron3, iron4]
  },
  {
    id: 11,
    name: "Jogo de Panelas Inox 5 Peças",
    price: 89.90,
    description: "Conjunto de panelas em aço inox com tampas de vidro. Ideal para o dia a dia na cozinha.",
    features: [
      "5 peças incluídas",
      "Aço inox resistente",
      "Tampas de vidro temperado",
      "Cabos com isolamento térmico",
      "Base tripla para distribuição uniforme",
      "Pode ir ao forno",
      "Fácil limpeza",
      "Garantia de 1 ano"
    ],
    images: [cookware1, cookware2, cookware3, cookware4]
  },
  {
    id: 12,
    name: "Jogo de Talheres 24 Peças",
    price: 69.90,
    description: "Conjunto completo de talheres em aço inox para 6 pessoas. Design elegante e durável.",
    features: [
      "24 peças (6 garfos, 6 facas, 6 colheres, 6 colheres de chá)",
      "Aço inox de alta qualidade",
      "Acabamento polido",
      "Resistente à oxidação",
      "Pode ir à lava-louças",
      "Design clássico",
      "Estojo para armazenamento",
      "Garantia de 1 ano"
    ],
    images: [cutlery1, cutlery2, cutlery3, cutlery4]
  },
  {
    id: 13,
    name: "Jogo de Toalhas de Banho 5 Peças",
    price: 79.90,
    description: "Conjunto de toalhas macias e absorventes. Perfeitas para o banho diário com conforto.",
    features: [
      "5 peças (2 banho, 2 rosto, 1 piso)",
      "100% algodão",
      "Alta absorção",
      "Toque macio",
      "Cores variadas disponíveis",
      "Resistente a lavagens",
      "Barra decorativa",
      "Garantia de qualidade"
    ],
    images: [towels1, towels2, towels3, towels4]
  },
  {
    id: 14,
    name: "Conjunto de Potes Herméticos 10 Peças",
    price: 49.90,
    description: "Potes plásticos com tampas herméticas para armazenar alimentos. Mantém a frescura por mais tempo.",
    features: [
      "10 peças de tamanhos variados",
      "Tampas herméticas",
      "Livre de BPA",
      "Transparente para fácil visualização",
      "Pode ir à geladeira e freezer",
      "Empilhável para economizar espaço",
      "Fácil limpeza",
      "Garantia de 1 ano"
    ],
    images: [containers1, containers2, containers3, containers4]
  },
  {
    id: 15,
    name: "Faqueiro 42 Peças",
    price: 99.90,
    description: "Faqueiro completo em aço inox com estojo elegante. Ideal para ocasiões especiais.",
    features: [
      "42 peças completas",
      "Aço inox 18/10",
      "Estojo em madeira",
      "Para 6 pessoas",
      "7 tipos de peças",
      "Acabamento espelhado",
      "Pode ir à lava-louças",
      "Garantia de 2 anos"
    ],
    images: [silverware1, silverware2, silverware3, silverware4]
  },
  {
    id: 16,
    name: "Tábua de Corte em Madeira",
    price: 39.90,
    description: "Tábua de corte em madeira nobre com alça. Resistente e durável para uso diário.",
    features: [
      "Madeira de alta qualidade",
      "Alça para pendurar",
      "Tamanho: 35x25cm",
      "Espessura: 2cm",
      "Resistente a cortes",
      "Não absorve odores",
      "Tratamento antifungos",
      "Manutenção simples"
    ],
    images: [cuttingboard1, cuttingboard2, cuttingboard3, cuttingboard4]
  },
  {
    id: 17,
    name: "Conjunto de Facas 6 Peças",
    price: 79.90,
    description: "Set de facas profissionais com suporte em madeira. Lâminas afiadas e resistentes.",
    features: [
      "6 facas especializadas",
      "Lâminas em aço inox",
      "Suporte em madeira",
      "Cabos ergonômicos",
      "Afiação prolongada",
      "Balanceamento perfeito",
      "Fácil manutenção",
      "Garantia de 1 ano"
    ],
    images: [knifeset1, knifeset2, knifeset3, knifeset4]
  },
  {
    id: 18,
    name: "Aparelho de Jantar 20 Peças",
    price: 99.90,
    description: "Conjunto completo de porcelana para 4 pessoas. Elegante e resistente para o dia a dia.",
    features: [
      "20 peças (4 pratos rasos, 4 fundos, 4 sobremesa, 4 tigelas, 4 xícaras)",
      "Porcelana de alta qualidade",
      "Cor branca clássica",
      "Pode ir ao micro-ondas",
      "Pode ir à lava-louças",
      "Resistente a manchas",
      "Design atemporal",
      "Garantia de 1 ano"
    ],
    images: [dinnerware1, dinnerware2, dinnerware3, dinnerware4]
  },
  {
    id: 19,
    name: "Jogo de Copos de Vidro 6 Peças",
    price: 34.90,
    description: "Conjunto de copos em vidro transparente. Ideais para água, sucos e drinks.",
    features: [
      "6 copos de 300ml",
      "Vidro cristal",
      "Transparente",
      "Design moderno",
      "Base reforçada",
      "Pode ir à lava-louças",
      "Resistente a choques térmicos",
      "Garantia contra defeitos"
    ],
    images: [glasses1, glasses2, glasses3, glasses4]
  },
  {
    id: 20,
    name: "Jogo de Taças de Vinho 6 Peças",
    price: 59.90,
    description: "Conjunto de taças elegantes para vinho. Perfeitas para momentos especiais.",
    features: [
      "6 taças de 450ml",
      "Cristal de alta qualidade",
      "Haste longa",
      "Borda fina",
      "Design elegante",
      "Realça os aromas",
      "Pode ir à lava-louças",
      "Garantia de 1 ano"
    ],
    images: [wineglasses1, wineglasses2, wineglasses3, wineglasses4]
  },
  {
    id: 21,
    name: "Forma de Bolo Redonda",
    price: 29.90,
    description: "Forma para bolo com fundo removível. Antiaderente para facilitar a desenformagem.",
    features: [
      "Diâmetro: 25cm",
      "Fundo removível",
      "Revestimento antiaderente",
      "Alumínio de alta qualidade",
      "Fácil limpeza",
      "Resistente a altas temperaturas",
      "Pode ir ao forno",
      "Garantia de 1 ano"
    ],
    images: [cakepan1, cakepan2, cakepan3, cakepan4]
  },
  {
    id: 22,
    name: "Jogo de Assadeiras 3 Peças",
    price: 54.90,
    description: "Conjunto de assadeiras em diferentes tamanhos. Antiaderentes e resistentes.",
    features: [
      "3 tamanhos variados",
      "Revestimento antiaderente",
      "Alumínio espesso",
      "Bordas reforçadas",
      "Distribuição uniforme de calor",
      "Fácil limpeza",
      "Resistente a arranhões",
      "Garantia de 1 ano"
    ],
    images: [bakingsheet1, bakingsheet2, bakingsheet3, bakingsheet4]
  },
  {
    id: 23,
    name: "Escorredor de Arroz Inox",
    price: 24.90,
    description: "Escorredor em aço inox com alças. Ideal para lavar arroz, massas e verduras.",
    features: [
      "Aço inox resistente",
      "Alças laterais",
      "Furos bem distribuídos",
      "Tamanho médio",
      "Não enferruja",
      "Fácil armazenamento",
      "Durável",
      "Garantia de 1 ano"
    ],
    images: [strainer1, strainer2, strainer3, strainer4]
  },
  {
    id: 24,
    name: "Jogo de Panelas Antiaderente 3 Peças",
    price: 69.90,
    description: "Conjunto de panelas com revestimento antiaderente. Cozimento saudável com menos óleo.",
    features: [
      "3 panelas (pequena, média, grande)",
      "Revestimento antiaderente dupla camada",
      "Cabos com toque frio",
      "Tampas de vidro",
      "Não gruda alimentos",
      "Fácil limpeza",
      "Distribuição uniforme de calor",
      "Garantia de 1 ano"
    ],
    images: [cookware1, cookware2, cookware3, cookware4]
  }
];
