export const getStaticPaths = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  const paths = data.map((country) => {
    console.log(country);
    return {
      params: { id: country?.name.common },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`
https://restcountries.com/v3.1/name/${id}`);
  const data = await response.json();
  //   console.log(context);
  return {
    props: { country: data },
  };
};

const Details = ({ country }) => {
  return (
    <div>
      <h1>{country[0].name.common}</h1>
      <img src={country[0].flags.png} height={100} width={120} />
      <h1>{country[0].capital}</h1>
      <h1>{country[0].region}</h1>
    </div>
  );
};

export default Details;
