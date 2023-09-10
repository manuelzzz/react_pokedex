import IType from "./PokemonsTypes.type";

export default interface IPokemon {
    height: number;
    id: number;
    name: string;
    front_default: string;
    types: IType[];
    weight: number;
}