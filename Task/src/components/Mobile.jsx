// function Mobile(props) {
//   return (
//     <div>
//       <h2>Name: {props.mobile.name}</h2>
//       <p>RAM: {props.mobile.ram}</p>
//       <p>Storage: {props.mobile.storage}</p>
//       <p>Price: ₹{props.mobile.price}</p>

//       <button onClick={() => props.onDiscount(props.mobile)}>
//         Discount
//       </button>
//     </div>
//   );
// }

// export default Mobile;

function Mobile(props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">

      <h2 className="text-xl font-bold text-gray-800 mb-3">
        Name: {props.mobile.name}
      </h2>

      <p className="text-gray-600 mb-2">
        RAM: {props.mobile.ram}
      </p>

      <p className="text-gray-600 mb-2">
        Storage: {props.mobile.storage}
      </p>

      <p className="text-lg font-semibold text-green-600 mb-4">
        Price: ₹{props.mobile.price}
      </p>

      <button
        onClick={() => props.onDiscount(props.mobile)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
      >
        Discount ₹5000
      </button>

    </div>
  );
}

export default Mobile;
