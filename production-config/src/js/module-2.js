import { groupBy } from 'lodash/collection';
import people from './people';

const managerGroups = groupBy(people, 'manager');
const p = document.querySelector('output');
const jsonText = JSON.stringify(managerGroups, null, 2);

p.innerHTML = `<pre>${jsonText}</pre>`;
