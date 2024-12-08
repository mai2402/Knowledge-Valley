

export const formatCurrency = (value:any) =>
    new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).
   format( value );