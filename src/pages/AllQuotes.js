import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun" },
  { id: "q2", author: "Dave", text: "Learning React is is a craze" },
  { id: "q3", author: "Race", text: "Learning React is a rave" },
];

const AllQuotes = () => {
  return (
    <section>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
};

export default AllQuotes;
