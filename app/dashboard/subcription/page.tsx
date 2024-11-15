import { SubcriptionListingPage } from '@/sections/subcription/view';
import { searchParamsCache } from '@/lib/searchparams';
import { SearchParams } from 'nuqs/parsers';
type pageProps = {
  searchParams: SearchParams;
};
export const metadata = {
  title: 'Dashboard : Subcriptions'
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);
  return <SubcriptionListingPage />;
}
