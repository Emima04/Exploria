import { useState } from "react";
import background from "../assets/images/cyber/background.png";
import MonitorPopup from "../components/puzzles/MonitorPopup";

export default function CyberRoom() {
  const [showMonitor, setShowMonitor] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

      {/* Background */}

      <img
        src={background}
        alt="Cyber Room"
        className="w-full h-screen object-cover"
      />



      {/* Monitor Hotspot */}

      <button
        onClick={() => setShowMonitor(true)}
        className="
          absolute
          bg-cyan-500/10
          border border-cyan-400/50
          hover:bg-cyan-500/20
          hover:border-cyan-400
          hover:shadow-[0_0_30px_#06b6d4]
          transition-all
          duration-300
          cursor-pointer
        "
        style={{
          top: "18.7%",
          left: "40.5%",
          width: "19.1%",
          height: "18.3%",
        }}
      />



      {/* Mission */}

      <div className="absolute top-7 left-7 bg-black/65 backdrop-blur-md border border-cyan-500 rounded-3xl p-6 w-[350px]">

        <h1 className="text-cyan-400 text-4xl font-bold">
          Cyber Investigation
        </h1>

        <p className="text-zinc-200 mt-5 text-lg leading-relaxed">
          The university database has been hacked.

          Find the attacker before the evidence is erased.
        </p>

      </div>



      {/* Security AI */}

      <div className="absolute bottom-28 right-8 bg-cyan-500/10 backdrop-blur-md border border-cyan-400 rounded-3xl p-6 w-[320px]">

        <h2 className="text-cyan-300 text-3xl font-bold">
          🤖 Security AI
        </h2>

        <p className="text-zinc-200 mt-4 text-lg leading-relaxed">
          Unauthorized access detected.

          Investigate the room and locate clues.
        </p>

      </div>



      {/* Inventory */}

      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/70 backdrop-blur-md border-t border-cyan-500 flex items-center px-10">

        <h3 className="text-cyan-300 font-semibold text-xl">
          Inventory
        </h3>

        <div className="ml-8 flex gap-4">

          <div className="w-14 h-14 border border-cyan-500 rounded-xl"></div>

          <div className="w-14 h-14 border border-cyan-500 rounded-xl"></div>

          <div className="w-14 h-14 border border-cyan-500 rounded-xl"></div>

        </div>

      </div>



      {/* Monitor Terminal Popup */}

      {showMonitor && (
        <MonitorPopup
          onClose={() => setShowMonitor(false)}
        />
      )}

    </div>
  );
}