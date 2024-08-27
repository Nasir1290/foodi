// import { useEffect } from "react";
// import { useState } from "react";

// const Home = () => {

//     const [search, setSearch] = useState('')
//     const [ meals, setMeals] = useState([])
//     const [error, setError] = useState('')

//     const loteData = async()=>{
//         try{
//             const res =  await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
//             const data = await res.json()
//               setMeals(data.meals)
//               setError('')
//         }catch{
//         setError( 'No Eat Fond')
//         }
//   }


//   const handle = (e)=>{
//     console.log(e.target.value);
//     setSearch(e.target.value)
    
// }

// useEffect(()=>{
//  loteData()
// },[ search])


//     return (
//       <div>
//         <div>
//           <h1 className=" text-4xl  text-center text-lime-500 font-extrabold">
//             {" "}
//             DeshiDine{" "}
//           </h1>
//           <p className=" text-4xl  text-center text-lime-500 font-bold mt-4">
//             {" "}
//             Taste the Tradition, Delivered to You{" "}
            
//           </p>
//         </div>

//         <div className=" flex justify-center  mt-10">
//           <input
//             onBlur={handle}
//             className="rounded-se-3xl rounded-bl-3xl w-96 h-16 border-s-2 border-e-2 border-t-2 border-blue-500 px-4 font-bold"
//             type="text"
//             placeholder="   🔎 Search..."
//           />
//           <button
//             onClick={() => loteData()}
//             className="rounded-se-3xl rounded-bl-3xl bg-white p-3 font-extrabold text-black h-16 border-s-2 border-e-2 border-t-2 border-blue-500"
//           >
//             {" "}
//             Search{" "}
//           </button>
//         </div>

//         <div className=" grid lg:grid-cols-3 grid-cols-1  gap-3  mt-4 max-w-7xl mx-auto ">
//           {meals?.length > 0 && !error ? (
//             meals.map((meal) => (
//               <div
//                 className=" border-2 border-blue-500 p-3 bg-white rounded-lg"
//                 key={meal.idMeal}
//               >
//                 <img
//                   className=" h-[400px] rounded-3xl shadow-2xl shadow-red-500 "
//                   src={meal.strMealThumb}
//                   alt=""
//                 />
//                 <h1 className=" text-center text-black mt-3 font-extrabold text-2xl">
//                   {" "}
//                   {meal.strMeal.slice(0, 25)}{" "}
//                 </h1>
//                 <h1 className=" text-center text-black mt-3 font-bold text-sm">
//                   {" "}
//                   {meal.strInstructions.slice(0, 150)}{" "}
//                 </h1>
//               </div>
//             ))
//           ) : (
//             <h5 className=" text-center mx-auto text-3xl bg-white rounded-xl p-3">
//               {" "}
//               Your Food Is Not In Our Service{" "}
//             </h5>
//           )}
//         </div>
//       </div>
//     );
// };

// export default Home;




import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
        setError("");
      } else {
        setMeals([]);
        setError("No Eat Found");
      }
    } catch {
      setError("No Eat Found");
    }
  };

  useEffect(() => {
    loadData();
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen mb-8 flex flex-col items-center justify-center bg-gradient-to-r from-lime-300 via-yellow-300 to-orange-300 text-gray-600">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4">DeshiDine</h1>
        <p className="text-2xl font-semibold">
          Taste the Tradition, Delivered to You
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <input
          onBlur={handleSearch}
          className="rounded-lg w-80 h-12 border-none shadow-lg px-4 text-black font-semibold"
          type="text"
          placeholder="🔎 Search for meals..."
        />
        <button
          onClick={loadData}
          className="ml-2 rounded-lg bg-white text-black px-6 py-2 font-bold shadow-lg"
        >
          Search
        </button>
      </div>

      {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {meals.length > 0 && !error ? (
          meals.map((meal) => (
            <div
              className="border-2 border-white p-4 bg-white rounded-lg shadow-lg"
              key={meal.idMeal}
            >
              <img
                className="h-64 w-full rounded-lg shadow-md"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <h2 className="text-xl text-center font-bold mt-4 text-gray-800">
                {meal.strMeal}
              </h2>
              <p className="text-gray-600 text-center mt-2">
                {meal.strInstructions.slice(0, 120)}...
              </p>
            </div>
          ))
        ) : (
          <h5 className="text-center mx-auto text-3xl bg-red-100 text-red-500 rounded-xl p-4">
            {error || "Your Food Is Not In Our Service"}
          </h5>
        )}
      </div> */}

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {meals?.length > 0 && !error ? (
          meals.map((meal) => (
            <div
              className="border-2 border-blue-500 p-4 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transform hover:scale-105 transition-transform"
              key={meal.idMeal}
            >
              <img
                className="h-[400px] w-full object-cover rounded-3xl shadow-2xl"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <h1 className="text-center mt-3 font-extrabold text-2xl">
                {meal.strMeal.slice(0, 25)}
              </h1>
              <p className="text-center mt-3 font-bold text-sm">
                {meal.strInstructions.slice(0, 150)}...
              </p>
            </div>
          ))
        ) : (
          <h5 className="text-center mx-auto text-3xl bg-white rounded-xl p-4">
            Your Food Is Not In Our Service
          </h5>
        )}
      </div>
    </div>
  );
};

export default Home;




