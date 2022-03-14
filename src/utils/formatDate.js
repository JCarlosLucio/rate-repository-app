import { format } from 'date-fns';

const formatDate = (date) => format(new Date(date), 'dd.MM.yyyy');

export default formatDate;
