import Link from "next/link";
import ImageCard from "./ImageCard";
export default function Card({ p }) {
  const { slug, rentalPrice, beds, name, images, url, fileName } = p;

  return (
    <>
      <Link href={`/properties/${slug}`}>
        <div className="card">
          {images.map((image, index) => {
            return (
              <ImageCard
                key={index}
                name={name}
                url={image.url}
                fileName={fileName}
                height={150}
                width={300}
              />
            );
          })}

          <div className="text-container">
            <h3>${rentalPrice} / month</h3>
            <h3>{beds} Beds</h3>
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
