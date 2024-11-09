import { searchParamsCache } from '@/lib/searchparams';
import { WithdrawListingPage } from '@/sections/transaction/withdraw/view';
import { SearchParams } from 'nuqs/parsers';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Transaction Deposit'
};

export default function Page({ searchParams }: pageProps) {
  searchParamsCache.parse(searchParams);
  return <WithdrawListingPage />;
}
