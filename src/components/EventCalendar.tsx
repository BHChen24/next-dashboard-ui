"use client";
import Calendar from "react-calendar";
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div><Calendar onChange={onChange} value={value} /></div>
    );
}