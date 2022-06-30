import './main.css';
import React, { useState, useEffect } from 'react';
import { Chart } from '../chart/chart';
import { IAssetList, ISource } from '../../models/model';
import { fetchData } from '../../services/fetch';
import { generateDataSource, generateDataSourceFakeValues } from '../../services/utils';

export const Main = () => {
  const [tvl, setTvl] = useState<ISource>({ labels: [], values: [] });
  const [apr, setApr] = useState<ISource>({ labels: [], values: [] });

  useEffect(() => {
    fetchData().then((res) => {
      processData(res.data);
    });
  }, []);

  function processData({ data }: IAssetList): void {
    const [
      {
        aprDaily,
        tokenAPriceHistory,
        selected_farm: [{ tvlStakedHistory }],
      },
    ] = data;

    const tvlSrc: ISource = generateDataSource(tvlStakedHistory);
    const aprSrc: ISource = generateDataSourceFakeValues(aprDaily, tokenAPriceHistory);

    setTvl(tvlSrc);
    setApr(aprSrc);
  }

  return (
    <div className="chart-container">
      <Chart title="Asset  APR(y)" source={apr} />
      <Chart title="Asset  TVL" source={tvl} />
    </div>
  );
};
