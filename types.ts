export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum CrisisLevel {
  LOW = 'LATENCY_DETECTED',
  MEDIUM = 'FRAME_DROP_IMMINENT',
  CRITICAL = 'OUT_OF_MEMORY'
}
