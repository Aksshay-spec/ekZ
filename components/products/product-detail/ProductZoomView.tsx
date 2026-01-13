// components/products/product-detail/ProductZoomView.tsx

type Props = {
  image: string;
  position: { x: number; y: number } | null;
};

export default function ProductZoomView({ image, position }: Props) {
  if (!position) return null;

  return (
    <div className="w-[450px] h-[450px] border rounded overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "200%",
          backgroundPosition: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
}
