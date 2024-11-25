function GreetingCard({ title, message }) {
    return (
      <div className="max-w-sm p-4 bg-white shadow-md rounded-lg border m-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    );
  }
  
  export default GreetingCard;