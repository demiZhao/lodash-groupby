// Import stylesheets
import './style.css';
import { find as _find } from 'lodash';

import { groupBy } from 'lodash';

var arr = [
  { Phase: 'Phase 1', Step: 'Step 1', Task: 'Task 1', Value: '5' },
  { Phase: 'Phase 1', Step: 'Step 1', Task: 'Task 2', Value: '10' },
  { Phase: 'Phase 1', Step: 'Step 2', Task: 'Task 1', Value: '15' },
  { Phase: 'Phase 1', Step: 'Step 2', Task: 'Task 2', Value: '20' },
  { Phase: 'Phase 2', Step: 'Step 1', Task: 'Task 1', Value: '25' },
  { Phase: 'Phase 2', Step: 'Step 1', Task: 'Task 2', Value: '30' },
  { Phase: 'Phase 2', Step: 'Step 2', Task: 'Task 1', Value: '35' },
  { Phase: 'Phase 2', Step: 'Step 2', Task: 'Task 2', Value: '40' },
];
var a = groupBy(arr, function (n) {
  return n.Phase;
});
console.log(a);
