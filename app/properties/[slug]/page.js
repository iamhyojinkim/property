import ImageCard from "@/app/components/ImageCard";
import Link from "next/link";

const getProperty = async (slug) => {
  const HYGRAPH_ENDPOINT =
    "https://eu-west-2.cdn.hygraph.com/content/cm2m1gfpm023r07urxyhkhndc/master";

  if (!HYGRAPH_ENDPOINT) {
    throw new Error("HYGRAPH_ENDPOINT isn't set");
  }
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query MyQuery($slug: String!){
  properties(where:{slug:$slug}){
          id
          name
          description
          rentalPrice
          parking
          pool
          petFriendly
          inUnitDryer
          beds
          images {
            id
            url
            fileName
          }
          managingBroker {
            name
            phoneNumber
    }
  }
}`,
      variables: {
        slug: slug,
      },
    }),
  });
  const data = await response.json();
  return data.data.properties;
};

const Property = async ({ params }) => {
  const { slug } = await params;
  const property = await getProperty(slug);

  return (
    <>
      <div className="property">
        <div className="property-images-container">
          {property[0].images.map((image, index) => {
            return (
              <ImageCard
                key={index}
                url={image.url}
                fileName={image.fileName}
                width={2000}
                height={550}
              />
            );
          })}
          <div>
            <h1>{property[0].name}</h1>
            <h2>
              <span>{property[0].beds} Beds</span>
            </h2>
            <br />
            <h2>
              <b>Overview</b>
            </h2>
            <p>{property[0].description}</p>
            <br />
            <h2>
              <b>Amenities</b>
            </h2>
            <ul>
              {property[0].parking && <li>Private Parking</li>}
              {property[0].pool && <li>Pool</li>}
              {property[0].petFriendly && <li>Pet Friendly</li>}
              {property[0].inUnitDryer && <li>In-Unit Dryer</li>}
            </ul>
            <br />
            <h3>
              <b>Licenced Brokerage</b>
            </h3>
            <p>Management: {property[0].managingBroker.name}</p>
            <p>Call: {property[0].managingBroker.phoneNumber}</p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
