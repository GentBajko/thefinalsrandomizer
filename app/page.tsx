"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRandomLoadout } from "@/lib/loadout";
import { useState } from "react";

export default function Home() {
  const [loadout, setLoadout] = useState(getRandomLoadout());

  const refreshLoadout = (category?: "light" | "medium" | "heavy") => {
    setLoadout(getRandomLoadout(category));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">The Finals Random Loadout</h1>
      <Card className="w-full max-w-md bg-gray-800/50 border-0">
        <CardHeader>
          <CardTitle className="text-2xl text-white">
            {loadout.category.charAt(0).toUpperCase() +
              loadout.category.slice(1)}{" "}
            Loadout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-2 text-white">
            <span className="font-bold">Ability:</span> {loadout.ability}
          </p>
          <p className="text-xl mb-2 text-white">
            <span className="font-bold">Weapon:</span> {loadout.weapon}
          </p>
          <div className="text-xl mb-2 text-white">
            <span className="font-bold">Gadgets:</span>
            <ul className="list-disc pl-5 mt-1">
              {loadout.gadgets.map((gadget, index) => (
                <li key={index}>{gadget}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Button className="text-white" onClick={() => refreshLoadout("light")}>
          Random Light
        </Button>
        <Button className="text-white" onClick={() => refreshLoadout("medium")}>
          Random Medium
        </Button>
        <Button className="text-white" onClick={() => refreshLoadout("heavy")}>
          Random Heavy
        </Button>
        <Button className="text-white" onClick={() => refreshLoadout()}>
          Random Any
        </Button>
      </div>
    </div>
  );
}
