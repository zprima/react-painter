import React, { useState } from "react";
import "./PaintGrid.css";

function PaintGrid(props) {
  const rows = 10;
  const cols = 10;

  const initGrid = [];
  for (var i = 0; i < rows; i++) {
    initGrid[i] = [];
    for (var j = 0; j < cols; j++) {
      initGrid[i][j] = props.colors[0];
    }
  }

  const [grid, setGrid] = useState(initGrid);

  const updateGrid = (i, j) => {
    if (grid[i][j].hex === props.color.hex) {
      return;
    }
    grid[i][j] = props.color;
    setGrid([...grid]);
  };

  const updateGridWithMouse = (e, i, j) => {
    if (e.buttons === 1) {
      updateGrid(i, j);
    }
  };

  return (
    <React.Fragment>
      <div className="column">
        <table>
          <tbody>
            {grid.map((row, r_i) => {
              return (
                <tr key={r_i}>
                  {row.map((col, c_i) => {
                    return (
                      <td
                        key={c_i}
                        className="painterBlock"
                        onClick={() => updateGrid(r_i, c_i)}
                        onMouseMove={e => updateGridWithMouse(e, r_i, c_i)}
                        style={{
                          backgroundColor: grid[r_i][c_i].hex
                        }}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div class="column">
        <button onClick={() => setGrid(initGrid)}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default PaintGrid;
