import React from 'react'

declare module 'EventConsumer' {
  export interface EventConsumerProps {
    children: Array<React.Component>
  }

  export default class EventConsumer extends React.Component<EventConsumerProps> {

  }
}