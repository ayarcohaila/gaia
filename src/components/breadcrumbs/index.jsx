import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Breadcrumbs = ({ links, ...props }) => {
  const { asPath } = useRouter();

  return (
    <Styled.Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon htmlColor="#6a6c73" fontSize="small" />}
      {...props}>
      {links?.map(link => {
        const { href, label } = link;
        if (asPath === href || !href) {
          return (
            <Styled.Text key={href} color="text.primary">
              {label}
            </Styled.Text>
          );
        }
        return (
          <Link href={href} key={href}>
            <Styled.Button>{label}</Styled.Button>
          </Link>
        );
      })}
    </Styled.Breadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Breadcrumbs;
