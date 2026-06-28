export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[15%] left-[8%] w-64 h-64 rounded-full glass-shape animate-float"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute top-[30%] right-[10%] w-48 h-48 rounded-full glass-shape animate-float-slow"
        style={{ animationDelay: '1.5s' }}
      ></div>
      <div
        className="absolute bottom-[20%] left-[15%] w-40 h-40 rounded-full glass-shape animate-float-fast"
        style={{ animationDelay: '3s' }}
      ></div>
      <div
        className="absolute top-[55%] right-[20%] w-56 h-56 rounded-full glass-shape animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-[8%] right-[35%] w-32 h-32 rounded-full glass-shape animate-float-slow"
        style={{ animationDelay: '4s' }}
      ></div>
      <div
        className="absolute bottom-[10%] right-[8%] w-36 h-36 rounded-full glass-shape animate-float-fast"
        style={{ animationDelay: '0.5s' }}
      ></div>
    </div>
  );
}