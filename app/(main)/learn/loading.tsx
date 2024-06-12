import { Loader } from 'lucide-react'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className=" h-full w-full flex items-center justify-center">
      <Loader className=" h-6 w-6 text-muted-foreground animate-spin" />
    </div>
  )
}

export default Loading
