/* eslint-disable @typescript-eslint/no-explicit-any */
const CarDetails = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) => {
  console.log(searchParams);
  return (
    <div>
      <h2>Car id {params?.id}</h2>
      <h2>Car name {searchParams?.car}</h2>
      <h2>bike name {searchParams?.bike}</h2>
    </div>
  );
};

export default CarDetails;
