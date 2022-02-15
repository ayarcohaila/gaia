export interface CounterFillProps {
  card: {
    bgImg: string;
    bgColor: string;
    logo: string;
    description: string;
    cards: number;
    volume: number;
  };
  countDownUnix: number;
}
