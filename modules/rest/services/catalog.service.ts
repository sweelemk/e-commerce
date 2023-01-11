import useSWR from 'swr';
import { fetcher } from "..";
import { IItemsGetResponse } from './../../../common/types';

export const useFetchCatalogItems = (query: string) => {
  const url = query ? `/api/items?query=${query}` : '/api/items';
  
  return useSWR<IItemsGetResponse>(url, fetcher);
};
