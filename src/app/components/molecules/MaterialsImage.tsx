import MaterialImage from "../atoms/MaterialImage";

export default function MaterialsImages() {
  return (
    <div className="relative flex-1 flex justify-end">
      <div className="relative w-[400px] h-[500px] flex flex-col gap-4 items-end">
        {/* Large Main Image */}
        <MaterialImage 
          src="/material3.png" 
          alt="Dining Set" 
          width={300} 
          height={350} 
          className="translate-21 -translate-x-3"
        />
        
        {/* Small Images */}
        <div className="absolute -left-20 flex flex-col gap-6">
          <MaterialImage 
            src="/material1.png" 
            alt="Chair 1" 
            width={150} 
            height={500} 
            className="-translate-y-3 -translate-x-5"
          />
          <MaterialImage 
            src="/material2.png" 
            alt="Sofa" 
            width={150} 
            height={200} 
            className="-translate-x-5"
          />
        </div>
      </div>
    </div>
  );
}
