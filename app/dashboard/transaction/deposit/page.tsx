import { searchParamsCache } from '@/lib/searchparams';
import { DepositListingPage } from '@/sections/transaction/deposit/view';
import { SearchParams } from 'nuqs/parsers';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Transaction Deposit'
};

export default function Page({ searchParams }: pageProps) {
  searchParamsCache.parse(searchParams);
  return <DepositListingPage />;
}
