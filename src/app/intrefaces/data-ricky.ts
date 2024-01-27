

interface OriginCharacter {
  name:string;
  url:string;
  
}

interface LocationCharacter{
  name:string;
  url:string;
}

export interface Character {
  id:number;
  name:string;
  image:string;
  species:string;
  status:string;
  type:string;
  gender:string
  location:LocationCharacter;
  origin?:OriginCharacter
}


export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;

}

export interface ApiResponse {
  info: Info;
  results: Character[]; 
}