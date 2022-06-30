import { IHistory, ISource } from '../models/model';

export function generateDataSource(data: IHistory[]): ISource {
  const dataSource: ISource = { labels: [], values: [] };
  data.forEach(({ date, value }) => {
    dataSource.labels.push(date);
    dataSource.values.push(value);
  });
  return dataSource;
}

export function generateDataSourceFakeValues(initVal: number = 1, data: IHistory[]): ISource {
  let value = initVal;
  const dataSource: ISource = { labels: [], values: [] };
  data.forEach(({ date }) => {
    dataSource.labels.push(date);
    value += value * 0.05;
    dataSource.values.push(value);
  });
  return dataSource;
}
