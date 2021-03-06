/**
 * Todo App Demo for Tungsten.js
 */
'use strict';

import { Collection } from 'tungstenjs';
import { debugName, model } from '../decorators';

function itemIsHidden(item, filter) {
  if (filter === 'active') {
    return item.get('completed');
  } else if (filter === 'completed') {
    return !item.get('completed');
  }
  return false;
}

@debugName('TodoFilterCollection')
export class TodoFilterCollection extends Collection {
  selectFilter(filterBy) {
    for (var i = this.length; i--;) {
      var model = this.at(i);
      model.set('selected', model.get('hash') === filterBy);
    }
  }
}
