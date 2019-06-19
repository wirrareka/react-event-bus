
import EventConsumer from 'react-event-bus/dist/@types/EventConsumer.d.ts'
import EventProvider from 'react-event-bus/dist/@types/EventProvider.d.ts'
import withEvents from 'react-event-bus/dist/@types/withEvents.d.ts'

export interface BusEvent {
  type: string
  value: any
}

export interface EventBusProps {
  dispatchEvent(event: BusEvent)
  addEventListener(type: string, action: (event: any) => void)
}

export {
  EventConsumer,
  EventProvider,
  withEvents
}
