/* @format */
import React, { useEffect, useRef } from 'react'
import DatePicker from 'react-flatpickr'

export function DateRangeCalendar({
  minDate,
  maxDate,
  defaultDates,
  onCloseWithNoSelection,
  onCloseWithSelection
}: {
  minDate?: string
  maxDate?: string
  defaultDates?: [string, string]
  onCloseWithNoSelection?: () => void
  onCloseWithSelection?: ([selectionStart, selectionEnd]: [Date, Date]) => void
}) {
  const calendarRef = useRef<DatePicker>(null)

  useEffect(() => {
    const calendar = calendarRef.current
    if (calendar) {
      calendar.flatpickr.open()
    }

    return () => {
      calendar?.flatpickr?.destroy()
    }
  }, [])

  return (
    <div className="h-0 w-0">
      <DatePicker
        id="calendar"
        options={{
          mode: 'range',
          maxDate,
          minDate,
          defaultDate: defaultDates,
          showMonths: 1,
          static: true,
          animate: true
        }}
        ref={calendarRef}
        onClose={
          onCloseWithSelection || onCloseWithNoSelection
            ? ([selectionStart, selectionEnd]) => {
                if (selectionStart && selectionEnd) {
                  if (onCloseWithSelection) {
                    onCloseWithSelection([selectionStart, selectionEnd])
                  }
                } else {
                  if (onCloseWithNoSelection) {
                    onCloseWithNoSelection()
                  }
                }
              }
            : undefined
        }
        className="invisible"
      />
    </div>
  )
}
