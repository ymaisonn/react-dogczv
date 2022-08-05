import * as React from 'react';
import { useInternationalization } from '@progress/kendo-react-intl';
export const CurrencyFormatter = () => {
  const intl = useInternationalization();
  return <div className="col-xs-12 col-sm-6 example-col">
      <label>Locale currency:</label> {intl.formatNumber(100, 'c')}
    </div>;
};