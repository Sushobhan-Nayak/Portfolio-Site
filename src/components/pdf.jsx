import Image from "next/image";

const PDFViewer = () => {
  return (
    <div>
      <Image
        src="/resume.jpg"
        alt="My resume"
        width={1150}
        loading="lazy"
        height={500}
        className="rounded-lg"
        objectFit="contain"
        quality={100}
      ></Image>
    </div>
  );
};

export default PDFViewer;
