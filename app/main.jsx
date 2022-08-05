import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-react-charts';
const categories = [
  new Date('2022-01'),
  new Date('2022-02'),
  new Date('2022-03'),
  new Date('2022-04'),
  new Date('2022-05'),
  new Date('2022-06'),
  new Date('2022-07'),
];
const firstSeries = [1230, 2760, 3100, 2120, 2400, 1556, 98];
const secondSeries = [1650, 2100, 287, 144, 190, 167, 212];
const thirdSeries = [56, 140, 1950, 46, 123, 78, 95];
/* CLDR Data */

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgLocalCurrency from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import bgDateFields from 'cldr-dates-full/main/bg/dateFields.json';
import usNumbers from 'cldr-numbers-full/main/en/numbers.json';
import usLocalCurrency from 'cldr-numbers-full/main/en/currencies.json';
import usCaGregorian from 'cldr-dates-full/main/en/ca-gregorian.json';
import usDateFields from 'cldr-dates-full/main/en/dateFields.json';
import gbNumbers from 'cldr-numbers-full/main/en-GB/numbers.json';
import gbLocalCurrency from 'cldr-numbers-full/main/en-GB/currencies.json';
import gbCaGregorian from 'cldr-dates-full/main/en-GB/ca-gregorian.json';
import gbDateField from 'cldr-dates-full/main/en-GB/dateFields.json';
/*import frCaGregorian from 'cldr-dates-full/main/fr/ca/gregorian.json';
import frLocalCurrency from 'cldr-numbers-full/main/fr/currencies.json';
import frNumbers from 'cldr-numbers-full/main/fr/numbers.json';
import frDateFields from 'cldr-dates-full/main/fr/dateFields.json';*/

import frNumbers from 'cldr-numbers-full/main/fr/numbers.json';
import frLocalCurrency from 'cldr-numbers-full/main/fr/currencies.json';
import frCaGregorian from 'cldr-dates-full/main/fr/ca-gregorian.json';
import frDateFields from 'cldr-dates-full/main/fr/dateFields.json';

import { IntlProvider, load } from '@progress/kendo-react-intl';
import { DateFormatter } from './DateFormatter';
import { CurrencyFormatter } from './CurrencyFormatter';
import { Chooser } from './Chooser';
load(
  likelySubtags,
  currencyData,
  weekData,
  bgNumbers,
  bgLocalCurrency,
  bgCaGregorian,
  bgDateFields,
  usNumbers,
  usLocalCurrency,
  usCaGregorian,
  usDateFields,
  gbNumbers,
  gbLocalCurrency,
  gbCaGregorian,
  gbDateField,
  frNumbers,
  frLocalCurrency,
  frCaGregorian,
  frDateFields
);
const locales = ['en-US', 'bg-BG', 'en-GB', 'fr-FR'];

const App = () => {
  const [locale, setLocale] = React.useState('en-US');
  const handleChange = React.useCallback((event) => {
    setLocale(event.target.value);
  }, []);
  return (
    <IntlProvider locale={locale}>
      <div>
        <div className="example-wrapper row">
          <Chooser
            value={locale}
            onChange={handleChange}
            options={locales}
            label="Select locale"
          />
          <DateFormatter />
          <CurrencyFormatter />
        </div>
        <Chart>
          <ChartTitle text="Units sold" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem
              categories={categories}
              format={0}
              title={{
                text: 'Months',
              }}
            />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem type="area" data={firstSeries} />
            <ChartSeriesItem type="area" data={secondSeries} />
            <ChartSeriesItem type="area" data={thirdSeries} />
          </ChartSeries>
        </Chart>
        ;
      </div>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
