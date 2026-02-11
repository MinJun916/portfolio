import Image from 'next/image';

type ProjectHeroImageProps = {
  imageSrc?: string;
};

const ProjectHeroImage = ({ imageSrc }: ProjectHeroImageProps) => (
  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-square md:min-h-[320px]">
    {imageSrc ? (
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    ) : (
      <div className="bg-primary-foreground/10 text-primary-foreground/50 flex size-full items-center justify-center">
        이미지
      </div>
    )}
  </div>
);

export default ProjectHeroImage;
