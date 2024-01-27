import Link from "next/link";

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return await res.json();
};
const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return await res.json();
};
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return await res.json();
};

interface Params {
  params: { name: string };
}

//Server component
export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="flex flex-col items-center justify-center border-slate-200 border-2 min-h-screen ">
      <div className=" relative bg-white text-black w-[400px] h-[200px] rounded-xl shadow-xl flex flex-col justify-center items-center font-semibold text-xl">
        <div>
        <p className="text-violet-600"> Personal Info</p>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Country: {country?.country[0]?.country_id}</div>
        </div>
        <div className="bg-violet-600 text-sm p-2 rounded-lg text-white absolute bottom-2 right-2">
        <Link  href='/'>Volver</Link>       

        </div>
      </div>
    </div>
  );
}
