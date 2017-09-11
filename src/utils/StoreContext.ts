import * as React from 'react';

export function StoreContext (target:any) {
  target.contextTypes = target.contextTypes || {};
  target.contextTypes.store = React.PropTypes.object.isRequired;
}