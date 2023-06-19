import { MouseEventHandler } from "react";

export interface CustomButtonTypes {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface OptionTypes {
  title: string;
  value: string;
}
export interface CustomFilterTypes {
  title: string;
  options: OptionTypes[];
}
export interface SearchManufacturerTypes {
  selected: string;
  setSelected: (selected: string) => void;
}

export interface SearchTypes {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface CarCardsTypes {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailsTypes {
  isOpen: boolean;
  car: CarCardsTypes;
  closeModal: () => void;
}

export interface FilterTypes {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
export interface ShowMoreTypes {
  pageNumber: number;
  isNext: boolean;
}
export interface HomeTypes {
  searchParams: FilterTypes;
}
