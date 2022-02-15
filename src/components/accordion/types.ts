export interface AccordionProps {
  id?: string;
  hasDivider?: boolean;
  title: string;
  defaultExpanded?: boolean;
  my?: number;
  mt?: number;
  sx?: {
    mt?: number;
    p?: number;
  };
  dividerSx?: {
    mt?: number;
    margin?: string;
    width?: string;
  };
  contentSx?: {
    mt?: number;
    p?: number;
  };
}
