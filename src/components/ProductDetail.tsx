import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Product } from "@/data/products";
import { Minus, Plus, Check } from "lucide-react";
import { toast } from "sonner";

interface ProductDetailProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetail = ({ product, open, onOpenChange }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleIncrement = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleBuy = () => {
    // Preparar dados do produto para o gateway de pagamentos
    const paymentData = {
      product_name: product.name,
      product_id: product.id,
      quantity: quantity,
      unit_price: product.price,
      total_price: product.price * quantity,
    };
    
    // Converter para query string
    const params = new URLSearchParams({
      item: paymentData.product_name,
      id: paymentData.product_id.toString(),
      qty: paymentData.quantity.toString(),
      price: paymentData.total_price.toFixed(2),
    });
    
    // Redirecionar para o gateway de pagamentos
    // Altere a URL abaixo para o seu gateway de pagamentos
    const gatewayURL = `https://seu-gateway-de-pagamentos.com/checkout?${params.toString()}`;
    window.location.href = gatewayURL;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Carousel de Imagens */}
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${product.name} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Informações do Produto */}
          <div className="flex flex-col">
            <div className="flex-1">
              <p className="text-3xl font-bold text-foreground mb-4">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Descrição</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Características</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quantidade e Botão */}
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-semibold">Quantidade:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                    className="rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleIncrement}
                    disabled={quantity >= 99}
                    className="rounded-l-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button 
                onClick={handleBuy}
                className="w-full"
                size="lg"
              >
                Comprar - R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
