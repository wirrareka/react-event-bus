import React from 'react'

declare module 'EventProvider' {
  export interface EventProviderProps {
    children: Array<React.Component>
  }

  export default class EventProvider extends React.Component<EventProviderProps, any> {

  }
}