import GreetingCard from './Components/GreetingCard';
import Header from './Components/Header';

function App() {
  const cards = [
    { title: "Happy Birthday!", message: "Wishing you a fantastic day filled with joy!" },
    { title: "Congratulations!", message: "Great job on your achievement!" },
    { title: "Thank You!", message: "Thanks for your kindness and support!" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="flex flex-wrap justify-center p-4">
        {cards.map((card, index) => (
          <GreetingCard key={index} title={card.title} message={card.message} />
        ))}
      </main>
    </div>
  );
}

export default App;
