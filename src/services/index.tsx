/**
 * 
 * 
 */

import * as React from 'react';
import { ErrorBoundary } from '../components/Shared/ErrorBoundary';

export const BasicComponent = ({ name }) => (
  <div>
    Basic Component: { name }
  </div>
);

export type ServiceFunction<P = {}, T = any> = (props:P, instance:any) => T;

export const favoritePokemon:ServiceFunction<{ name: string }, string> = ({ name }, {}) => name;
export const pokemonTypes:ServiceFunction = ({}, instance) => {
  instance.setState({
    types: ['Fire', 'Water', 'Grass']
  })
};
export const getUsers:ServiceFunction = async ({}, instance) => {
  serviceGuard(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    instance.setState({
      users: data
    });
  }, (e) => {
    console.error(e);
  });
}

export function serviceGuard(onSuccess:Function, onError:Function = (e) => console.error(e)) {
  try {
    onSuccess();
  } catch (e) {
    onError(e);
  }
}

export type Service<T = any> = (...a:any[]) => Promise<T>;

const _service = Symbol;

export interface ServiceOptions {
  errorBoundaryMessage?: string | JSX.Element;
  onError?: (err?:any) => void;
  onSuccess?: (res?:any) => void;
}

/**
 * withService() is a higher order function that takes an array of functions and performs
 * them periodically on a new component that wraps around the target component.
 * 
 * @param services - An array of Service Functions, see ServiceFunction
 * @return Component
 * 
 */
export function withService(...services:ServiceFunction[]):any {
  console.log('service', services);

  return Component => {
    console.log('Component', Component);
    const componentName = Component.displayName || Component.name;
    const onSuccess = res => res;
    const onError = err => err;

    const executor = (instance, props, service:ServiceFunction) => {
      service(props, instance);
    };

    return class ServicedComponent extends React.Component {
      constructor(props, context) {
        super(props, context);
      }

      static displayName = `ServiceProvider(${componentName})`; 

      public componentWillMount() {
        console.log('displayName', ServicedComponent.displayName);
        services.forEach(service => executor(this, this.props, service));
        //executor(this, this.props);
      }

      public componentDidMount() {
        console.log('componentDidMount fired');
      }

      public componentWillUnmount() {

      }

      public componentWillReceiveProps(nextProps) {
        services.forEach(service => executor(this, nextProps, service));
      }

      public render() {
        return <ErrorBoundary><Component {...this.props} /></ErrorBoundary>;
      }
    };
  }
}


export const BasicComponentWithTypes = withService(favoritePokemon, pokemonTypes, getUsers)(BasicComponent);


// export function groupServices(options, ...services:Function[]) {
//   const baseUrl = options.baseUrl ? options.baseUrl : 'http://localhost:8080';
  
//   return services.map((service, index) => {
//     return {
//       [service.name]: service.bind(this, options, ...service.arguments.splice(1))
//     }
//   });
// }

// const Pokemon = groupServices({
//   baseUrl: 'http://localhost:8080/data',
// }, function getAyy ({baseUrl}) {
//   return Promise.resolve('Ayyy')
// });

// console.log('Pokemon', Pokemon);