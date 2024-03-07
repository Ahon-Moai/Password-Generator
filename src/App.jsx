import React, { useEffect } from "react";
import { useState, useCallback } from "react";
function App() {
  const [lenth, setLenth] = useState(8);
  const [chars, setChars] = useState(false);
  const [number, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  let GeneratePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTXYZabcdefghilmnopxwyz";
    if (number) str += "019294982048924";
    if (symbols) str += "!@#$%^&*()";

    for (let i = 0; i < lenth; i++) {
      const chars = Math.floor(Math.random() * str.length);
      pass += str.charAt(chars);
      setPassword(pass);
    }
  }, [chars, number, symbols]);
  useEffect(() => {
    GeneratePass();
  }, [lenth, number, symbols, chars, ]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex text-sm gap-x-2">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="Password"
            className="outline-none w-full py1 px-3"
          ></input>
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div>
            <div className="flex items-center gap-x-1">
              <input
                value={lenth}
                className="cursor-pointer mt-4"
                type="range"
                name=""
                id=""
                min={6}
                max={20}
                onChange={(e) => setLenth(e.target.value)}
              ></input>
              <label>Length {lenth}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                onChange={() => {
                  setNumbers((prev) => !prev);
                }}
              ></input>
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={symbols}
                onChange={() => {
                  setSymbols((prev) => !prev);
                }}
              ></input>
              <label htmlFor="numbers">Symbols</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={chars}
                onChange={() => {
                  setChars((prev) => !prev);
                }}
              ></input>
              <label htmlFor="numbers">Chars</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
