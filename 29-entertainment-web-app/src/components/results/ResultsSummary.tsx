type ResultsSummaryProps = { query: string; count: number };

function ResultsSummary({ query, count }: ResultsSummaryProps) {
  return (
    <div className="text-xl md:text-3xl">
      Found {count} results for '{query.trim()}'
    </div>
  );
}

export default ResultsSummary;
