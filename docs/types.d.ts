export interface Sport {
  id: number;
  name: string;
}

export interface Competitor {
  id: number;
  name: string;
}

export interface Match {
  id: number;
  home: Competitor;
  away: Competitor;
}

export interface Tournament {
  id: number;
  name: string;
  sport: Sport;
  matches: Match[];
}

export interface Outcome {
  id: number;
  name: string;
  odds: number;
}

export interface Market {
  id: number;
  name: string;
  outcomes: Outcome[];
  displayOrder: number;
  matchId: number;
}

export interface Bet {
  marketId: number;
  matchId: number;
  outcomeId: Outcome;
  bet: number;
}
