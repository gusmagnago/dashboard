export interface EventInterface {
  type: EventType | string;
  detail: string;
  time: Date | string;
  severity: EventSeverity | string;
  objectType: ObjectType;
  objectName: string;
}

export type EventType =
  | 'login'
  | 'avatar-change'
  | 'change-password'
  | 'login-faild'
  | 'logoff'
  | 'change-settings'
  | 'server-unreachable'
  | 'request-new-password'
  | 'sent-new-password';

export type EventSeverity = 'info' | 'warning' | 'error' | 'critical';

export type ObjectType = 'user' | 'api-gateway';
