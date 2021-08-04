import { response, context } from 'msw';

const DELAY_IN_MILLISECONDS = 300;

// Custom response with delay
export const res = (...transformers) => response(...transformers, context.delay(DELAY_IN_MILLISECONDS));
