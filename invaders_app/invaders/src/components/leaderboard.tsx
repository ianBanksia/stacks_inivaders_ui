//import data from "./data/leaderboard.json";
import { useState, useEffect } from 'react';
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

interface Records {
    id: string;
    points: string;
  }
  type RecordsData = Records[];

  export const LeaderboardTable = () => {
  const [items, setItems] = useState<RecordsData>([])
  useEffect(() => {
    const parser = new PublicGoogleSheetsParser('1pcFmVcMMFChOhOb81XTg1D4_GeK-8wsjAdfL3F4LhgA')
    parser.parse().then(data => {
      setItems(data)
    })
  }, []);

    return (
        <div className="read-the-docs">
          {items.map((Records, i) => {
            return <h2>{Records.id} - {Records.points}</h2>;
          })}
        </div>
      );
};


