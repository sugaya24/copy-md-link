import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [mdLink, setMdLink] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
      if (tab[0]) {
        const { title, url } = tab[0];
        setMdLink(`[${title}](${url})`);
      }
    });
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(mdLink);
  };

  return (
    <div className="w-72 h-52 p-2">
      <div className="flex flex-col h-full gap-2">
        <h1 className="text-lg font-black">Copy the link</h1>
        <textarea
          name=""
          id=""
          value={mdLink}
          readOnly
          className="border-2 p-2 border-black rounded-md w-full grow flex-wrap"
        ></textarea>
        <div className="flex justify-end">
          <Button btnLabel="Copy" onClick={copyLink} />
        </div>
      </div>
    </div>
  );
}

export default App;
