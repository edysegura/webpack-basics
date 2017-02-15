import {groupBy} from 'lodash/collection';
import people from './people';

const managerGroups = groupBy(people, 'manager');

const p = document.querySelector('output');
p.innerHTML = '<pre>' + JSON.stringify(managerGroups, null, 2) + '</pre>';