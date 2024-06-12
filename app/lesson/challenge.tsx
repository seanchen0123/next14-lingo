import { challengeOptions, challenges } from '@/db/schema'
import { cn } from '@/lib/utils'
import React from 'react'
import Card from './card'

type Props = {
  options: (typeof challengeOptions.$inferSelect)[]
  selectedOption?: number
  type: typeof challenges.$inferSelect.type
  status: 'correct' | 'wrong' | 'none'
  disabled: boolean
  onSelect: (id: number) => void
}

export const Challenge = ({
  options,
  selectedOption,
  type,
  status,
  disabled,
  onSelect
}: Props) => {

  return (
    <div
      className={cn(
        'grid gap-2',
        type === 'ASSIST' && 'grid-cols-1',
        type === 'SELECT' &&
          'grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]'
      )}
    >
      {options.map(({ id, text, imageSrc, audioSrc }, i) => (
        <Card
          key={id}
          id={id}
          text={text}
          imageSrc={imageSrc}
          audioSrc={audioSrc}
          shortcut={`${i + 1}`}
          selected={selectedOption === id}
          status={status}
          disabled={disabled}
          type={type}
          onClick={() => onSelect(id)}
        />
      ))}
    </div>
  )
}
