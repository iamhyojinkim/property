export default function ImageCard({ url, name, fileName, height, width }) {
  return (
    <>
      <img
        className="image"
        src={url}
        alt={`Image of ${name} - ${fileName}`}
        height={height}
        width={width}
        priority="true"
      />
    </>
  );
}
//https://www.youtube.com/watch?v=HHKV9XbXUOw usecallback useMemo 배우기 googlemap 넣기전에
