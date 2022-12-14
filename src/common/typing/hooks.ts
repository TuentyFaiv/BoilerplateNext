import type { Locale } from "date-fns";
import type { ObjStrCustom } from "./types";

export type HookModalParameters = null | string;

export type HookModalFunc = (custom?: unknown) => void;

export type HookModalReturn = [boolean, HookModalFunc];

export type HookMediaParameters = HookModalParameters;

export type HookMediaReturn = boolean;

export type HookCountry = {
  name_en: string;
  name_es: string;
  dial_code: string;
  code: string;
};

export type HookCountries = {
  countries: HookCountry[];
};

export type HookCalendarLangs = ObjStrCustom<Locale>;

export type HookCalendarParam = "past" | "future";

export type HookCalendarState = {
  year: number;
  month: string;
  day: string;
};

type Day = {
  name: string;
  number: string;
};

type Month = {
  days: Day[];
  name: string;
  number: string;
};

type Year = {
  year: number;
  months: Month[];
};

type Calendar = {
  years: Year[];
  months: Month[];
  days: Day[];
  selected: HookCalendarState;
};

export type HookCalendarReturn = {
  calendar: Calendar;
  chooseYear: (year: number) => void;
  chooseMonth: (month: string) => void;
  chooseDay: (day: string) => void;
};
