import { SHeading } from '@/components/SHeading';

export function generateHeading (h, { level = 1, content = '' } = {}) {
  return h(SHeading, { props: { level } }, content);
}
