"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  cellSize = 56,
}: {
  cellSize?: number;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  // Dynamically calculate grid size based on window size
  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);
      setGridSize({ rows, cols });
    };
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [cellSize]);

  return (
    // <div
    //   ref={ref}
    //   className={cn(
    //     "absolute inset-0 h-screen w-screen overflow-hidden opacity-70",
    //     // 💡 Much lighter neutral tones with reduced visibility
    //     "[--cell-border-color:rgba(0,0,0,0.03)] [--cell-fill-color:rgba(0,0,0,0.008)] [--cell-shadow-color:rgba(0,0,0,0.04)]",
    //     "dark:[--cell-border-color:rgba(255,255,255,0.04)] dark:[--cell-fill-color:rgba(255,255,255,0.01)] dark:[--cell-shadow-color:rgba(255,255,255,0.025)]"
    //   )}
    // >
    <div
  ref={ref}
  className={cn(
    "absolute inset-0 h-screen w-screen overflow-hidden opacity-70",
    "[--cell-border-color:rgba(0,0,0,0.1)] [--cell-fill-color:rgba(0,0,0,0.02)] [--cell-shadow-color:rgba(0,0,0,0.04)]",
    "dark:[--cell-border-color:rgba(255,255,255,0.1)] dark:[--cell-fill-color:rgba(255,255,255,0.02)] dark:[--cell-shadow-color:rgba(255,255,255,0.05)]"
  )}
>

      <DivGrid
        key={`grid-${rippleKey}`}
        rows={gridSize.rows}
        cols={gridSize.cols}
        cellSize={cellSize}
        borderColor="var(--cell-border-color)"
        fillColor="var(--cell-fill-color)"
        clickedCell={clickedCell}
        onCellClick={(row, col) => {
          setClickedCell({ row, col });
          setRippleKey((k) => k + 1);
        }}
        interactive
      />
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols]
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div className={cn("z-0", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "border-[0.5px] opacity-30 transition-opacity duration-150 will-change-transform hover:opacity-70 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none"
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};
