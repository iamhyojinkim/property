import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Map from "./components/Map";

const getProperties = async () => {
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
      query: `query MyQuery {
  properties {
    beds
    description
    images {
      fileName
      url
    }
    location {
      latitude
      longtitude
    }
    name
    id
    rentalPrice
    slug
  }
}`,
    }),
  });
  const json = await response.json();
  return json.data.properties;
};

export default async function Home() {
  const properties = await getProperties();
  const slugs = properties.map((property) => property.slug);
  const locations = properties.map((property) => property.location);
  return (
    <>
      <Navbar />
      <Map locations={locations} />
      <Grid properties={properties} slugs={slugs} />
    </>
  );
}
