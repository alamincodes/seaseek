/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import aiIcon from "@/assets/images/aiIcon.svg";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3Jlam9ua2hhbiIsImEiOiJjazdqMWE5dWwwcjl0M2ZwOXJyMXZiMDhrIn0.bqtLb5EgMZFvxachriARZA";

const Analysis = () => {
  const [date, setDate] = useState();

  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/srejonkhan/cm0869rqo00l301qo64e54wts",
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();

    map.on("style.load", () => {
      map.setFog({});
    });

    let userInteracting = false;
    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    const spinEnabled = true;

    function spinGlobe() {
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.on("mousedown", () => {
      userInteracting = true;
    });
    map.on("dragstart", () => {
      userInteracting = true;
    });
    map.on("moveend", () => {
      spinGlobe();
    });

    spinGlobe();

    return () => map.remove(); // Clean up on unmount
  }, []);

  return (
    <div className="w-full h-[calc(100vh-104px)]">
      <div className="grid h-full grid-cols-12">
        <div className="w-full h-full col-span-9" ref={mapContainer} />
        <div className="relative w-full h-full col-span-3">
          <div className="w-full">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal w-full rounded-none",
                    !date && "text-muted-foreground rounded-none w-full "
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 ">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* content */}
          <ScrollArea className="h-[calc(100vh-140px)] bg-white">
            <div className="px-2 mt-2">
              <h4 className="text-xl text-center text-themeColor text-pretty">
                Chlorophyll a: concentration
              </h4>
              <div className="p-2 mt-2 text-orange-600 border border-orange-500 rounded bg-orange-50">
                <h4 className="text-xs">
                  You are analyzing Today's processed data of "Chlorophyll_a
                  Concentration" collected by PACE Satelite.
                </h4>
              </div>
              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">
                  Chlorophyll a: The Green Pigment of Life
                </h5>
                <p className="mt-2 text-sm font-secondary text-zinc-600">
                  Chlorophyll a is a green pigment found in plants, algae, and
                  some bacteria. It is essential for photosynthesis, the process
                  by which plants convert sunlight into energy. This pigment
                  absorbs light energy, primarily in the blue and red
                  wavelengths, and uses it to drive the chemical reactions that
                  produce glucose from carbon dioxide and water.
                </p>
              </div>
              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">Chlorophyll a Variants</h5>
                <ul className="mt-2 text-sm text-zinc-600 font-secondary">
                  <li>
                    Chlorophyll a exists in several variants, each with slight
                    differences in structure and absorption properties. These
                    variations can influence the photosynthetic efficiency of
                    organisms.
                  </li>
                  <li>
                    <b>Chlorophyll a1:</b> This is the most common form of
                    chlorophyll a. It has a methyl group at position 3 of the
                    porphyrin ring.
                  </li>
                  <li>
                    <b> Chlorophyll a2:</b> This variant differs from
                    chlorophyll a1 by having a formyl group instead of a methyl
                    group at position 3. Chlorophyll a2 is found in some algae
                    and cyanobacteria.
                  </li>
                  <li>
                    <b> Chlorophyll a3:</b> This variant has a vinyl group at
                    position 3 of the porphyrin ring. It is less common than
                    chlorophyll a1 and a2.
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://www.researchgate.net/profile/Jaime-Teixeira-Da-Silva/publication/283348170/figure/fig2/AS:669487875510293@1536629756753/The-structure-of-Chlorophyll-a-and-b.png"
                  className="h-[300px] object-contain"
                  alt=""
                />
              </div>
              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">Chlorophyll a: A Deeper Dive</h5>
                <p className="mt-2 text-sm text-zinc-600 font-secondary">
                  Chlorophyll a is a key pigment involved in photosynthesis, the
                  process by which plants, algae, and certain bacteria convert
                  sunlight into chemical energy. It is a member of the
                  chlorophyll family, which includes other pigments like
                  chlorophyll b and chlorophyll c.
                </p>
              </div>

              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">
                  Chlorophyll a: Role in Photosynthetic Processes
                </h5>
                <ul className="mt-2 text-sm text-zinc-600 font-secondary">
                  <li>
                    <b>Photosystem II:</b> Chlorophyll a is a key component of
                    photosystem II, one of the two protein complexes involved in
                    photosynthesis. In photosystem II, chlorophyll a molecules
                    act as light-harvesting pigments, capturing sunlight and
                    transferring the energy to a reaction center.
                  </li>
                  <li>
                    <b>Electron Transport Chain:</b> The excited electrons from
                    chlorophyll a are transferred to a series of electron
                    carriers, including plastoquinone, cytochrome b6f complex,
                    and plastocyanin. This electron transport chain generates a
                    proton gradient across the thylakoid membrane, which is used
                    to produce ATP through chemiosmosis.
                  </li>
                  <li>
                    <b>Photosystem I:</b> Chlorophyll a is also present in
                    photosystem I. In this complex, chlorophyll a molecules
                    absorb light and generate a strong reducing agent, NADPH,
                    which is essential for the Calvin cycle.
                  </li>
                </ul>
              </div>

              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">Chlorophyll a Degradation</h5>
                <p className="mt-2 text-sm text-zinc-600 font-secondary">
                  Chlorophyll a can undergo degradation under various
                  conditions, leading to the formation of chlorophyll breakdown
                  products. These products can have both positive and negative
                  effects on ecosystems. Chlorophyll catabolites: These are the
                  breakdown products of chlorophyll a. They include pheophytin
                  a, pheophorbide a, and chlorophyllides. Degradation factors:
                  Chlorophyll degradation can be influenced by factors such as
                  light intensity, temperature, pH, and the presence of enzymes.
                  Ecological implications: Chlorophyll a degradation can affect
                  the photosynthetic efficiency of organisms and the overall
                  productivity of ecosystems. It can also influence the color
                  and quality of natural waters.
                </p>
              </div>
              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">Applications of Chlorophyll a</h5>
                <p className="mt-2 text-sm text-zinc-600 font-secondary">
                  Chlorophyll a has various applications in different fields:
                  Biomarker: Chlorophyll a is used as a biomarker for
                  photosynthesis and primary production in aquatic ecosystems.
                  By measuring chlorophyll a concentrations, scientists can
                  assess the health and productivity of these ecosystems. Food
                  and Cosmetics: Chlorophyll a is used as a natural pigment in
                  food and cosmetics to impart a green color. It is considered
                  safe for consumption and is often used in products such as
                  juices, ice cream, and lipsticks. Environmental Monitoring:
                  Chlorophyll a is used in environmental monitoring to assess
                  water quality and detect pollution. High levels of chlorophyll
                  a can indicate nutrient pollution or algal blooms. Research:
                  Chlorophyll a is studied extensively in research to understand
                  the mechanisms of photosynthesis, the effects of environmental
                  changes on ecosystems, and the development of new technologies
                  for sustainable energy production.
                </p>
              </div>
              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">
                  Chlorophyll a: Importance in Ecosystems
                </h5>
                <p className="mt-2 text-sm text-zinc-600 font-secondary">
                  Primary Producer: Chlorophyll a is essential for primary
                  production, the process by which plants and other
                  photosynthetic organisms create organic matter from inorganic
                  substances. This organic matter forms the basis of food webs
                  in ecosystems. Oxygen Production: Photosynthesis, driven by
                  chlorophyll a, is responsible for the production of oxygen, a
                  gas essential for the survival of most aerobic organisms.
                  Carbon Cycle: Chlorophyll a plays a crucial role in the global
                  carbon cycle by removing carbon dioxide from the atmosphere
                  and incorporating it into organic matter. Climate Regulation:
                  The photosynthetic activities of chlorophyll a-containing
                  organisms help to regulate the Earth's climate by reducing
                  atmospheric carbon dioxide levels.
                </p>
              </div>
              {/* result */}
              <div className="mt-3">
                <h5 className="font-medium">In summary</h5>
                <p className="mt-2 text-sm text-zinc-600 font-secondary">
                  chlorophyll a is a fundamental molecule in photosynthesis,
                  responsible for absorbing light energy and converting it into
                  chemical energy. Its unique structure and function allow it to
                  play a central role in the production of organic matter, the
                  regulation of ecosystems, and the maintenance of life on
                  Earth.
                </p>
              </div>
            </div>
          </ScrollArea>
          {/* ask ai button */}
          <div className="absolute flex flex-col items-center justify-center p-3 rounded-full bottom-2 right-2 size-16 bg-primary">
            <img src={aiIcon} className="size-5" alt="ai" />
            <h4 className="text-xs text-white font-secondary">Ask AI</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
