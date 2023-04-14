interface CardDetails {
  label: string;
  value: number;
}

export interface CardData {
  id: number;
  name: string;
  totalUpdates: number;
  details: CardDetails[];
}

interface StatSection {
  id: number;
  title: string;
  cardData: CardData[];
}

export const statsSections: StatSection[] = [
  {
    id: 1,
    title: "Daily Updates",
    cardData: [
      {
        id: 1,
        name: "Today (2023-04-11)",
        totalUpdates: 16,
        details: [
          { label: "Commit", value: 4 },
          { label: "Add", value: 2 },
          { label: "Delete", value: 10 },
        ],
      },
      {
        id: 2,
        name: "Daily Average",
        totalUpdates: 30,
        details: [
          { label: "Commit", value: 14 },
          { label: "Add", value: 15 },
          { label: "Delete", value: 1 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Weekly Updates",
    cardData: [
      {
        id: 1,
        name: "2023-04-10 ~ 2023-04-15?",
        totalUpdates: 16,
        details: [
          { label: "Commit", value: 4 },
          { label: "Add", value: 2 },
          { label: "Delete", value: 10 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Monthly Updates",
    cardData: [
      {
        id: 1,
        name: "Monthly Updates Avg.?",
        totalUpdates: 16,
        details: [
          { label: "Commit", value: 4 },
          { label: "Add", value: 2 },
          { label: "Delete", value: 10 },
        ],
      },
    ],
  },
];

export const cardData: CardData[] = [
  {
    id: 1,
    name: "Today (2023-04-11)",
    totalUpdates: 16,
    details: [
      { label: "Commit", value: 4 },
      { label: "Add", value: 2 },
      { label: "Delete", value: 10 },
    ],
  },
  {
    id: 2,
    name: "Daily Average",
    totalUpdates: 30,
    details: [
      { label: "Commit", value: 14 },
      { label: "Add", value: 15 },
      { label: "Delete", value: 1 },
    ],
  },
];

export const chartData = [
  { date: "Agu '11", value: 10 },
  { date: "Agu '12", value: 8 },
  { date: "Agu '13", value: 4 },
  { date: "Agu '14", value: 18 },
  { date: "Agu '15", value: 9 },
  { date: "Agu '16", value: 13 },
  { date: "Agu '17", value: 16 },
  { date: "Agu '18", value: 11 },
  { date: "Agu '19", value: 14 },
  { date: "Agu '20", value: 6 },
  { date: "Agu '21", value: 7 },
  { date: "Agu '22", value: 3 },
  { date: "Agu '23", value: 19 },
  { date: "Agu '24", value: 12 },
  { date: "Agu '25", value: 15 },
  { date: "Agu '26", value: 17 },
  { date: "Agu '27", value: 5 },
  { date: "Agu '28", value: 2 },
  { date: "Agu '29", value: 20 },
];
