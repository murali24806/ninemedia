"use client";

// 7 columns x 9 rows bitmap forming a "9" — the page's signature mark.
const PATTERN = [
  "0111100",
  "1000110",
  "1000110",
  "1000110",
  "0111110",
  "0000010",
  "0000110",
  "0001100",
  "0111000",
];

export default function PixelNine({ size = 220, className = "" }) {
  const cell = size / 7;
  return (
    <div
      className={`pixel-nine ${className}`}
      style={{
        width: size,
        height: (size / 7) * 9,
        gridTemplateRows: `repeat(9, 1fr)`,
      }}
      aria-hidden="true"
    >
      {PATTERN.flatMap((row, r) =>
        row.split("").map((bit, c) =>
          bit === "1" ? (
            <span
              key={`${r}-${c}`}
              style={{
                gridRowStart: r + 1,
                gridColumnStart: c + 1,
                animationDelay: `${(r * 7 + c) * 12}ms`,
                borderRadius: cell * 0.18,
              }}
            />
          ) : (
            <span
              key={`${r}-${c}`}
              style={{
                gridRowStart: r + 1,
                gridColumnStart: c + 1,
                background: "transparent",
                animation: "none",
              }}
            />
          )
        )
      )}
    </div>
  );
}
