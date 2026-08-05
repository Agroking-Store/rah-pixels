import React, { Children, isValidElement, cloneElement } from 'react'
import type { ReactNode } from 'react'
import './ScrollStack.css'

export interface ScrollStackItemProps {
  children: ReactNode
  itemClassName?: string
  index?: number
  style?: React.CSSProperties
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  index = 0,
  style = {}
}) => (
  <div
    className={`scroll-stack-card ${itemClassName}`.trim()}
    style={{
      '--stack-index': index,
      ...style
    } as React.CSSProperties}
  >
    {children}
  </div>
)

export interface ScrollStackProps {
  children: ReactNode
  className?: string
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string
  scaleEndPosition?: string
  baseScale?: number
  scaleDuration?: number
  rotationAmount?: number
  blurAmount?: number
  useWindowScroll?: boolean
  onStackComplete?: () => void
}

export const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = '' }) => {
  const childrenArray = Children.toArray(children)

  return (
    <div className={`scroll-stack-container ${className}`.trim()}>
      {childrenArray.map((child, idx) => {
        if (isValidElement<ScrollStackItemProps>(child)) {
          return cloneElement(child, {
            index: idx
          })
        }
        return child
      })}
    </div>
  )
}

export default ScrollStack
