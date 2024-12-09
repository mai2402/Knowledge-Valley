

export const formatCurrency = (value:any) =>
    new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).
   format( value );

     
        // Utility function to reset page to 1
        export function resetToFirstPage(
            searchParams: URLSearchParams,
            setSearchParams: (params: Record<string, string>) => void
          ) {

            if (searchParams.get('page') !== "1") {

            setSearchParams({ ...Object.fromEntries(searchParams.entries()), page: "1" });
            }
          }