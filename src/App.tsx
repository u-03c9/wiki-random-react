import { useEffect, useState } from "react";
import { fetchRandomWikiItem, WikiItemInterface } from "./api/wikiItem.api";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [wikiItems, setWikiItems] = useState<WikiItemInterface[]>([]);

  const fetchNewWikiItem = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const newWikiItem = await fetchRandomWikiItem();
    setWikiItems([...wikiItems, newWikiItem]);
    setIsLoading(false);
  };

  const handleClick = async () => {
    await fetchNewWikiItem();
  };

  useEffect(() => {
    fetchNewWikiItem();
  }, []);

  return (
    <>
      <button onClick={handleClick}>Fetch new Wiki Item</button>
      <div>
        {wikiItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
