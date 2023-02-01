export interface Pokemon{
  id: number;
  name: string;
  abilities: Abilities;
  base_experience: number;
  height: number;
  weight: number;




}

export interface Abilities{
  ability: Ability
  url: string;
  slot: number;
}


export interface Ability{
  name: string;
  url: string
}



