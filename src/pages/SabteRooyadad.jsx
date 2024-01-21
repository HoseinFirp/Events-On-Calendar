import { useState } from "react";

function SabteRooyadad() {
  const [selectedNimsaal, setSelectedNimsaal] = useState("1402-3");
  return (
    <div>
      <label
        className={`flex items-center flex-col pt-20 h-screen gap-5 w-80 ml-auto mr-auto`}
      >
        <div className="flex gap-5">
          <select
            value={selectedNimsaal}
            onChange={(e) => setSelectedNimsaal(e.target.value)}
            className="rounded-lg p-2"
          >
            <option value="1402-3">1402-3</option>
            <option value="1402-2">1402-2</option>
            <option value="1402-1">1402-1</option>
            <option value="1401-3">1401-3</option>
            <option value="1401-2">1401-2</option>
            <option value="1401-1">1401-1</option>
            <option value="1400-3">1400-3</option>
            <option value="1400-2">1400-2</option>
            <option value="1400-1">1400-1</option>
            <option value="1399-3">1399-3</option>
            <option value="1399-2">1399-2</option>
            <option value="1399-1">1399-1</option>
            <option value="1398-3">1398-3</option>
            <option value="1398-2">1398-2</option>
            <option value="1398-1">1398-1</option>
            <option value="1397-3">1397-3</option>
            <option value="1397-2">1397-2</option>
            <option value="1397-1">1397-1</option>
            <option value="1396-3">1396-3</option>
            <option value="1396-2">1396-2</option>
            <option value="1396-1">1396-1</option>
            <option value="1395-3">1395-3</option>
            <option value="1395-2">1395-2</option>
            <option value="1395-1">1395-1</option>
          </select>
          <p className="flex self-center">انتخاب نیمسال تحصیلی</p>
        </div>
      </label>
    </div>
  );
}

export default SabteRooyadad;
