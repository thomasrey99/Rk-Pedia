import Image from "next/image";

const LoadingComponent = () => {
  return (
    <section
      role="status"
      aria-live="polite"
      className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-6 py-10"
    >
      <Image
        src="/loading.png"
        width={200}
        height={200}
        alt="Cargando..."
        className="animate-pulse"
        priority
      />
      <h3 className="text-[var(--white)] text-lg font-medium animate-pulse">
        Cargando...
      </h3>
    </section>
  );
};

export default LoadingComponent;
