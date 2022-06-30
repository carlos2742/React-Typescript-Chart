export interface IHistory {
  date: string;
  value: number;
}

export interface IFarm {
  tvlStakedHistory: IHistory[];
}

export interface IAsset {
  aprDaily: number;
  tokenAPriceHistory: IHistory[];
  selected_farm: IFarm[];
}

export interface IAssetList {
  data: IAsset[];
}

export interface ISource{
  labels: string[];
  values: number[];
}

export interface IChart{
  title:string;
  source: ISource;
}
