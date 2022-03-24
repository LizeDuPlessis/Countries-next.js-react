import Link from "next/link";
import { useState } from "react";
export const getStaticProps = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return {
    props: { country: data },
  };
};

const countries = ({ country }) => {
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmitText = (e) => {
    e.preventDefault();
    setSubmitText(inputText);
  };

  const filteredCountries = country.filter((country) =>
    country?.name.common.toLowerCase().includes(submitText.toLowerCase())
  );

  return (
    <div>
      <h1> List of countries</h1>
      {inputText}
      <form>
        <input type="search" placeholder="search" onChange={handleInputText} />

        <button onClick={handleSubmitText}>submit</button>
      </form>
      {filteredCountries &&
        filteredCountries.map((country) => (
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
