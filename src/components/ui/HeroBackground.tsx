'use client';

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* ================================
          TECHNICAL GRID
      ================================= */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#0D1B2A 1px, transparent 1px),
            linear-gradient(90deg, #0D1B2A 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ================================
          CENTER SYSTEM
      ================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >

        {/* Outer circle */}
        <div className="absolute inset-0 rounded-full border border-slate-200" />

        {/* Middle circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-slate-100
          "
        />

        {/* Inner circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-slate-100
          "
        />

        {/* ================================
            ROTATING RADAR
        ================================= */}

        <div className="absolute inset-0 animate-spin [animation-duration:8s]">

          {/* Radar line */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[2px]
              -translate-x-1/2
              -translate-y-full
              bg-gradient-to-t
              from-[#E5322D]
              via-[#E5322D]/40
              to-transparent
            "
          />

          {/* Radar point */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-[#E5322D]
              shadow-[0_0_15px_rgba(229,50,45,0.7)]
            "
          />

        </div>

        {/* ================================
            SECOND RADAR
        ================================= */}

        <div className="absolute inset-0 animate-spin [animation-duration:14s] [animation-direction:reverse]">

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-px
              -translate-x-1/2
              -translate-y-full
              bg-gradient-to-t
              from-slate-400/40
              to-transparent
            "
          />

        </div>

        {/* ================================
            CENTER POINT
        ================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#E5322D]
            shadow-[0_0_15px_rgba(229,50,45,0.6)]
          "
        />

      </div>

      {/* ================================
          TECHNICAL CROSSHAIRS
      ================================= */}

      <div className="absolute left-[18%] top-[25%] text-lg text-slate-300">
        +
      </div>

      <div className="absolute right-[20%] top-[30%] text-lg text-slate-300">
        +
      </div>

      <div className="absolute bottom-[22%] left-[25%] text-lg text-slate-300">
        +
      </div>

      {/* ================================
          TECHNICAL AXIS MARKS
      ================================= */}

      <div className="absolute left-[8%] top-1/2 h-px w-12 bg-slate-200" />

      <div className="absolute right-[8%] top-1/2 h-px w-12 bg-slate-200" />

      <div className="absolute left-1/2 top-[10%] h-8 w-px bg-slate-200" />

      <div className="absolute bottom-[10%] left-1/2 h-8 w-px bg-slate-200" />

    </div>
  );
}