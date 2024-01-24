"use client";
import React from "react";

function ChangeBtn() {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-4 border rounded-md text-center p-4 bg-violet-300">
      Change
    </div>
  );
}

export default ChangeBtn;
