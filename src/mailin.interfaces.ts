export interface NodeMailinOptions {
  port: number;
  logFile?: string;
  logLevel?: 'silly' | 'info' | 'debug' | 'warn' | 'error';
  smtpOptions?: {
    SMTPBanner?: string;
    disableDNSValidation?: boolean;
  };
}