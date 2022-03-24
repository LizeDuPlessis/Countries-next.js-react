import Link from "next/link";
export const getStaticProps = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return {
    props: { country: data },
  };
};

const countries = ({ country }) => {
  return (
    <div>
      <h1> List of countries</h1>
      {country.map((country) => (
        <Link
          href={`/countries/${country?.name.common}`}
          key={country?.name.common}
        >
          <a>
            <h3>{country?.name.common}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default countries;
