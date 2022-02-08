import type { NextApiRequest, NextApiResponse } from 'next';
import { gqlClient } from '~/config/apolloClient';
import { GET_NFL_FILTERS } from '~/store/server/queries';

interface INflTaxonomy {
  moment_count: number;
  taxonomy_attribute: string;
  taxonomy_label: string;
  taxonomy_value: string;
}

type ParsedTaxonomy = {
  count: number;
  label: string;
  value: string;
};

interface INftlFilterOptions {
  [k: string]: ParsedTaxonomy[];
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const { nfl_all_day_taxonomies } = await gqlClient.request(GET_NFL_FILTERS);

    const parsedFilters = nfl_all_day_taxonomies.reduce(
      (acc: INftlFilterOptions, curr: INflTaxonomy) => {
        const filterOption: ParsedTaxonomy = {
          count: curr.moment_count,
          label: curr.taxonomy_label,
          value: curr.taxonomy_value
        };

        if (acc[curr.taxonomy_attribute]) {
          acc[curr.taxonomy_attribute] = [...acc?.[curr?.taxonomy_attribute], filterOption];
        } else {
          acc[curr.taxonomy_attribute] = [filterOption];
        }
        return acc;
      },
      {}
    );

    res.status(200).json({
      filters: parsedFilters
    });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query NFL filters options` });
  }
}
