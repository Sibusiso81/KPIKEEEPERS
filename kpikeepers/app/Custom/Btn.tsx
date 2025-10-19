import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'

function Btn({name}: {name?: string}) {
  return (
     <Button
        variant="ghost"
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000)
              ),
            {
              loading: "Loading...",
              success: (data) => `${data.name} has been created`,
              error: "Error",
            }
          )
        }}
      >
        {name}
      </Button>
  )
}

export default Btn