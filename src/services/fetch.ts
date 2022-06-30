import axios, { AxiosResponse } from 'axios';
import { IAssetList } from '../models/model';

  export function fetchData(page: number = 1): Promise<AxiosResponse<IAssetList>> {
    return axios.get<IAssetList>(
      `https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=${page}&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000`
    );
  }