import { parseISO, formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';

export const getRelativeTime = (dateTime) => {
  const createdDate = parseISO(dateTime);
  const currentDate = new Date();
  return formatDistance(createdDate, currentDate, {
    addSuffix: true,
    includeSeconds: true,
    locale: ko,
  });
};
